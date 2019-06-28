import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteCameraPage } from './complete-camera';

@NgModule({
  declarations: [
    CompleteCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteCameraPage),
  ],
})
export class CompleteCameraPageModule {}
