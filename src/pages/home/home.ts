import {Component, ViewChild} from '@angular/core';
import {NavController, Tabs} from 'ionic-angular';
import {HistoryPage} from "../history/history";
import {CameraPage} from "../camera/camera";
import {ArtworkPage} from "../artwork/artwork";
import {CompleteCameraPage} from "../complete-camera/complete-camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root: any = HistoryPage;
  tab2Root: any = CameraPage;
  tab3Root: any = ArtworkPage;
  tab4Root: any = CompleteCameraPage;


  tab1Title = "Historial";
  tab2Title = "Camara";
  tab3Title = "Obra de arte";

  constructor(public navCtrl: NavController) {
  }

}
