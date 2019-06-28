import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HTTP} from "@ionic-native/http";

@Injectable()
export class RestfulServiceProvider {

  private BASE_ENDPOINT = 'https://pacific-tor-94123.herokuapp.com';
  private MET_API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
  constructor(public http: HttpClient,
              public HTTP: HTTP) {

  }

  getInfoById(id){
    return this.HTTP.get(this.MET_API + id ,{}, {
      'Content-Type': 'application/json',
    });
  }

    /*uploadImage(image){
      return this.HTTP.get(this.BASE_ENDPOINT + "/UploadImage?image="+image,{}, {
        'Content-Type': 'text/plain',
      });
    }*/

    uploadImage(image){
      let data = {
        'img': image
      };
      let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      return this.HTTP.post(this.BASE_ENDPOINT+"/action", data, headers);
    }

  login(loginForm){
    return this.HTTP.post(this.BASE_ENDPOINT+"/Login", loginForm,
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
  }
}
