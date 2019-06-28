import { Injectable } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { CameraPreview, CameraPreviewDimensions, CameraPreviewOptions} from '@ionic-native/camera-preview';

@Injectable()
export class CameraGalleryProvider {

  base64Image: any = "";
  paintList: any = [];
  index: any = 0;

  constructor( private camera: Camera,
               private cameraPreview: CameraPreview) {
  }

  takeImage(){

    const options: CameraOptions  = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA, //included seperatly
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      popoverOptions: {
        x: 0,
        y: 50,
        width: 100,
        height: 50,
        arrowDir: this.camera.PopoverArrowDirection.ARROW_ANY
      },
      targetHeight: 800,
      targetWidth: 800
    }

    return new Promise(resolve => {
      this.camera.getPicture(options).then(
        imageData => resolve(imageData),
        error => alert(error)
      );
    });
  }

  selectImageFromGellary(){
    const options : CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    return new Promise(resolve => {
      this.camera.getPicture(options).then(
        imageData => resolve(imageData),
        error => alert(error)
      );
    });
  }

  showCamera(height: number){
    const cameraPreviewDimension: CameraPreviewDimensions = {
      width: window.screen.width,
      height: 540
    }
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: false,
      toBack: false,
      alpha: 1,
      tapToFocus: true,
      disableExifHeaderStripping: true

    };
  }


  public takePicture(navCtrl) {
    const options: CameraOptions = {quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 800,
      targetHeight: 800
    }

    return new Promise((resolve, reject) => {
      this.camera.getPicture(options).then(
        imageData => {
          resolve(imageData);
          this.base64Image = imageData;
        }, error =>{
          reject("mierda");
        }
      )
    });
  }

  public getImage(){
    return this.base64Image;
  }

  public addPaint(paint){
    for(let painting of this.paintList){
      if (painting.objectID == paint.objectID){
        alert("Este cuadro ya lo ha fotografiado");
        return;
      }
    }
    this.paintList.push(paint);
  }

  public getPaint(){
    return this.paintList;
  }

  public setActualPaint(index){
    this.index = index;
  }

  public getActualPaint(){
    return this.paintList[this.index];
  }
}
