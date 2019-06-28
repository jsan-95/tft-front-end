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

  }

  ionViewDidEnter(){
    this.paintings = this.cameraGallery.getPaint();
  }

  goToArtWork(index){
    this.cameraGallery.setActualPaint(index);
    localStorage.setItem("artWork","true");
    this.navCtrl.parent.select(1);
  }

}
