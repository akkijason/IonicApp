import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  // header_data: any;
  welcomeMessage = "";

  constructor(private router: Router,
    private _platform: Platform, public commonService: CommonService) { }

  ngOnInit() {
   
    let loginObj = JSON.parse(localStorage.getItem("_lgnobj"));
    if (loginObj) {
      this.welcomeMessage = loginObj['displayMsg'];
    }
    // debugger

    // const sub = this._platform.backButton.subscribeWithPriority(9999, () => {
    //   debugger
    //   // Do nothing
    // });
  }

  checkin() {
    this.router.navigate(['otp']);
  }

}
