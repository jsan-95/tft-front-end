import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreview} from "@ionic-native/camera-preview";
import {RestfulServiceProvider} from "../../providers/restful-service/restful-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CameraGalleryProvider} from "../../providers/camera-gallery/camera-gallery";


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  imageForm: FormGroup;

  image: any = "";
  constructor(public navCtrl: NavController,
              private cameraPreview: CameraPreview,
              public formBuilder: FormBuilder,
              private restfulService: RestfulServiceProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private cameraGallery: CameraGalleryProvider) {
    this.imageForm = this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      imageInput: ['', Validators.required],
    });
  }


  ionViewWillLeave(){
    this.cameraPreview.stopCamera();
    this.image = "";
    (<HTMLInputElement>document.getElementById('previewPicture')).src = '';
  }

  ionViewDidEnter() {
    if(this.cameraGallery.getImage() != null){
      this.image = this.cameraGallery.getImage();
      (<HTMLInputElement>document.getElementById('previewPicture')).src = this.image;
    }
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height/1.6,
      camera: 'rear',
      tapPhoto: false,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };

    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
      },
      (err) => {
      }
    );

  }

  showCamera(){
    this.cameraPreview.show();
  }

  stopCamera(){
    this.cameraPreview.stopCamera();
  }

  takePicture(){
    let loading = this.loadingCtrl.create({
      content: 'Tomando imagen',
      cssClass: 'my-loading-class'
    });

    loading.present();

    const pictureOpts: CameraPreviewPictureOptions = {
      width: 50,
      height: 50,
      quality: 100
    }

    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      /*(<HTMLInputElement>document.getElementById('previewPicture')).src = 'data:image/jpeg;base64,' + imageData;*/
      this.image = 'data:image/jpeg;base64,'+imageData;
      loading.dismiss()
      this.send();
    }, (err) => {
      loading.dismiss()
    });
  }


  send(){
    let alert1 = this.alertCtrl.create({
      title: '<img src="'+this.image+'"/>',

      //title: '<img src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"/>',
      message: "¿Quieres saber información sobre esta imagen?",
      cssClass: 'my-alert-class',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Tratando imagen',
              cssClass: 'my-loading-class'
            });
            loading.present();
            this.restfulService.uploadImage(this.image).then(
              (res) => {
                alert("pasoo"+res.data)
                loading.dismiss()
              }
            ).catch(error => {
              alert("estado:"+error.status+"error:"+error.error)
              loading.dismiss()
            });
          }
        },
        {
          text: 'No',
          role: 'cancel',
        }
      ]
    });
    alert1.present();
  }
}
