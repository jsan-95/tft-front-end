import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {CameraGalleryProvider} from "../../providers/camera-gallery/camera-gallery";
import {RestfulServiceProvider} from "../../providers/restful-service/restful-service";
import {not} from "rxjs/util/not";

@IonicPage()
@Component({
  selector: 'page-artwork',
  templateUrl: 'artwork.html',
})

export class ArtworkPage {

  image: any = "";
  json: any = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cameraGallery: CameraGalleryProvider,
              private restfulService: RestfulServiceProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  ionViewDidEnter(){
    if (localStorage.getItem("artWork") != null) {
      this.json = this.cameraGallery.getActualPaint();
      localStorage.removeItem("artWork");
      this.image = "";
    }else if (localStorage.getItem("fromCamera") != null) {
      this.image = 'data:image/jpeg;base64,'+this.cameraGallery.getImage();
      this.json = "";
      localStorage.removeItem("fromCamera");
    }else{
      this.image = 'data:image/jpeg;base64,'+this.cameraGallery.getImage();
    }
  }


  send(){
    let loading = this.loadingCtrl.create({
      content: "Tratando imagen",
      cssClass: 'my-loading-class'
    });
    loading.present();
    this.restfulService.uploadImage(this.image).then(
      (res) => {

        // this.image = 'data:image/jpeg;base64,'+res.data;
        this.restfulService.getInfoById(res.data).then(info =>{
          this.json = JSON.parse(info.data);
          this.cameraGallery.addPaint(this.json);
          loading.dismiss();
        }).catch(error => {

          loading.dismiss();
        });
      }
    ).catch(error => {
      // alert("estado:"+error.status+"error:"+error.error);
      loading.dismiss();
    });
  }



  private exist(paintingsItems, data){

    var paintings_split = paintingsItems.split(";");
    for(var i = 0; i < paintings_split.length-1; i++){
      var jsonPaintingId = JSON.parse(paintings_split[i]).objectID;
      var dataId = JSON.parse(data).objectID;
      if(jsonPaintingId == dataId){
        alert("TRUE");
        return true;
      }
    }
    return false;
  }
}
