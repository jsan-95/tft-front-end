import { Component } from '@angular/core';
import {App, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {CameraGalleryProvider} from "../../providers/camera-gallery/camera-gallery";
import {RestfulServiceProvider} from "../../providers/restful-service/restful-service";
import {paintingDTO} from "../artwork/paintingDTO"
import {ArtworkPage} from "../artwork/artwork";

@IonicPage()
@Component({
  selector: 'page-complete-camera',
  templateUrl: 'complete-camera.html',
})
export class CompleteCameraPage {

  image: any = "";
  json: any = "";
  private painting: paintingDTO;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private camera: Camera,
              private cameraGallery: CameraGalleryProvider,
              private restfulService: RestfulServiceProvider,
              private loadingCtrl: LoadingController,
              private app: App) {
  }

  ionViewDidLoad(){
    console.log(this.navCtrl.getViews());
  }

  ionViewWillEnter(){
    this.cameraGallery.takePicture(this.navCtrl).then((imageData) => {
      this.navCtrl.parent.select(1);
    }).catch(err => {
      this.navCtrl.parent.select(parseInt(this.navCtrl.parent._selectHistory[this.navCtrl.parent._selectHistory.length-2].split("-")[1]));
    });
  }





}
