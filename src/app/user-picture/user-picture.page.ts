import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { ToastController   } from '@ionic/angular';
import {WebView} from '@ionic-native/ionic-webview/ngx';
// import { normaliz} from '@ionic/angular';
// import {WebView} from '@ionic-native/ionic-webview/ngx';
// import { ViewController, Platform, normalizeURL } from 'ionic-angular';

@Component({
  selector: 'app-user-picture',
  templateUrl: './user-picture.page.html',
  styleUrls: ['./user-picture.page.scss'],
  providers: [WebView]
})
export class UserPicturePage implements OnInit {

  enableNext:boolean = false;
  imageURI = "assets/images/placeholder-gen.png";
  base64Image: any;

  constructor(private camera: Camera, private router: Router, public toastController: ToastController, 
    private webView: WebView) { }

  ngOnInit() {
    this.enableNext = false;
    this.takePic();
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    // correctOrientation: true,
    // allowEdit: true,
    // targetHeight: 300,
    // targetWidth: 300
  }


   takePic(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      debugger
      this.imageURI =  "assets/images/placeholder-gen.png";
      this.imageURI = this.webView.convertFileSrc(imageData);
      // window.Ionic.WebView.convertFileSrc(imageData)"";
      localStorage.setItem("_userImg", this.imageURI);
      this.base64Image = 'data:image/jpeg;base64,' + imageData;   
      // this.openToast(this.base64Image); 
      this.enableNext = true;  
     }, (err) => {
      // Handle error
     });

  }

  // async openToast(imgData: any){
  //   const toast = await this.toastController.create({
  //     message: imgData,
  //     duration: 2000
  //   });
  //   toast.present();
  // }

  next(){
    this.router.navigate(['print-preview']);
  }
  
  

}
