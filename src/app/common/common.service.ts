import { Injectable, Injector } from '@angular/core';
import { Constants } from "./common.const";
import { Router } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
// import {AuthService} from "../auth/auth.service";
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable()
export class CommonService extends Constants {
  public httpOptions = {};
  // loginData = JSON.parse(localStorage.getItem('loginData'));
  // loginToken = JSON.parse(localStorage.getItem('loginData')).token;
  constructor(private injector: Injector, private alertController: AlertController, public toastController: ToastController) {
    super();
    // this.setToken();
  }

  public get router(): Router { //this creates router property on your service.
    return this.injector.get(Router);
  }

  // public accessToken = localStorage.getItem("accessToken");


  // public httpOptions = {
  //   headers: new HttpHeaders(
  //     { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.loginToken }
  //   )
  // };

  // public httpImageOptions = {
  //   headers: new HttpHeaders(
  //     { 'Authorization': 'Basic T0lGQ1VzZXI6T0lGQ1VzZXI=' }
  //   )
  // }

  setToken() {
    this.httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Authorization': 'Basic RklGVXNlcjpGSUZVc2Vy' }
      )
    }
    // if (localStorage.getItem('cpsLoginData')){
    //
    // }
  }

  getToken(endPoint:any){
    let bearerToken = localStorage.getItem("_lgntkn");
    switch(endPoint){
      case "basic":
      this.httpOptions = {
        headers: new HttpHeaders(
          { 'Content-Type': 'application/json' }
        )
      }
      break;
      case "bearer":
      this.httpOptions = {
        headers: new HttpHeaders(
          { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + bearerToken }
        )
      }
      break;
      default:
      break;
    }
    return this.httpOptions;
  }

  hasAccess(module:any){
    let accessObj = JSON.parse(localStorage.getItem('_lgndata'))["access"];
    if(accessObj[module] == "R" || accessObj[module] == "W" || accessObj[module] == "RW"){
      return true;
    }else{
      return false;
    }
  }

  hasWriteAccess(module:any){
    let accessObj = JSON.parse(localStorage.getItem('_lgndata'))["access"];
    if(accessObj[module] == "W" || accessObj[module] == "RW"){
      return true;
    }else{
      return false;
    }
  }

  // setUser(userID: any) {
  //   localStorage.setItem("userid", userID);
  // }

  getUser() {
    let loginData = JSON.parse(localStorage.getItem("_lgndata"));
    return loginData["userid"];
  }

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  checkNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  checkCommaNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    debugger
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 44) {
      return false;
    }
    return true;
  }

  isAuthenticated(){

    if( localStorage.getItem("_lgntkn") == null || localStorage.getItem("_lgndata") == null ){
      return false;
    }else{
      return true;
    }
  }

  async logOut(){
    const alert = await this.alertController.create({
      header: 'Logout',
      backdropDismiss: false,
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Logout',
          handler: (event) => {
            debugger
            let pass = JSON.parse(localStorage.getItem('_lgnobj'));
            if (event['password'].trim() != "") {
              if (event['password'] == pass['logoutPassword']) { 
                this.applyLogout();                
              } else {
                this.openToast("Incorrect logout password!");
                return false;
              }
            } else {
              this.openToast("Please enter password!");
              return false;
            }

          }
        }
      ]
    });

    await alert.present();
  }

  applyLogout(){
    localStorage.clear();    
    this.router.navigate(['home']);
  }

  async openToast(smg: any) {
    const toast = await this.toastController.create({
      position: "top",
      cssClass: "toast",
      message: smg,
      duration: 2000
    });
    toast.present();
  }

  // getUserInfo()
  // {
  //   //var x = this.getStorage(this.loginConst.userInfoObj);
  //   var x = this.authService.userInfo;
  //   //  console.log('common  service ---------1'+ this.authService.userInfo);
  //   //  console.log('common  service ---------2'+ JSON.stringify(this.authService.userInfo));
  //
  //   return x;
  //   // try {
  //   //     do {
  //   //         x = JSON.parse(x);
  //   //     } while (typeof x != "object")
  //   // } catch (e) {
  //   //
  //   // }
  //   // if (x) {
  //   //     if (Array.isArray(x['object'])) {
  //   //         return x['object'][0];
  //   //     } else if (x['object'] != null && typeof x['object'] == "object") {
  //   //         return x['object'];
  //   //     } else if (x['object'] == null && typeof x == "object") {
  //   //         return x;
  //   //     }
  //   // };
  //   // return {};
  // }

  // getPagePermissions(pageText){
  //   for (var i=0; i < this.loginData.access.length; i++){
  //     let pageName = this.loginData.access[i].name.toLowerCase();
  //     if (pageName.indexOf(pageText) != -1){
  //       console.log('in');
  //       return {
  //         read: this.loginData.access[i].read,
  //         write: this.loginData.access[i].write
  //       }
  //     }
  //   }
  // }

};
