import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ArtworkPage} from "../pages/artwork/artwork";
import {CameraPage} from "../pages/camera/camera";
import {HistoryPage} from "../pages/history/history";
import {Camera} from "@ionic-native/camera";
import {RestfulServiceProvider } from '../providers/restful-service/restful-service';

import {HTTP} from "@ionic-native/http";
import { CameraGalleryProvider } from '../providers/camera-gallery/camera-gallery';
import {CameraPreview} from "@ionic-native/camera-preview";
import {HttpClientModule} from "@angular/common/http";
import {CompleteCameraPage} from "../pages/complete-camera/complete-camera";
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArtworkPage,
    CameraPage,
    HistoryPage,
    CompleteCameraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArtworkPage,
    CameraPage,
    HistoryPage,
    CompleteCameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    CameraPreview,
    RestfulServiceProvider,
    HTTP,
    CameraGalleryProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
