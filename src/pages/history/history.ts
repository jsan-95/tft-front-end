import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {CameraGalleryProvider} from "../../providers/camera-gallery/camera-gallery";


@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  private paintings: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private cameraGallery: CameraGalleryProvider) {
    localStorage.clear();

  }

  ionViewDidEnter(){

    this.paintings = this.cameraGallery.getPaint();


    //
    // var paintingsItem = localStorage.getItem("paintings");
    // var paintings_split = paintingsItem.split(";");
    // for(var i = 0; i < paintings_split.length; i++){
    //   var jsonPainting = JSON.parse(paintings_split[i]);
    //   this.paintings.push(jsonPainting);
    //
    //
    // }
  }

  goToArtWork(index){
    this.cameraGallery.setActualPaint(index);
    localStorage.setItem("artWork","true");
    this.navCtrl.parent.select(1);
  }

}
