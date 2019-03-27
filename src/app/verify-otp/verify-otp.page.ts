import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { OtpService } from '../otp/otp.service';
import { CommonService } from "../common/common.service";

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {

  realOtp: any;
  enteredOtp = "";
  isInvalid: boolean;
  invalidText: any;
  retryCount = 0;
  enableResend: boolean = false;
  timer = 30;

  constructor(private router: Router, private otpService: OtpService, public commonService: CommonService) { }

  ngOnInit() {
    this.startTimer();
    this.isInvalid = false;
    this.invalidText = "";
    this.realOtp = localStorage.getItem('_otp');
  }

  startTimer() {
    this.timer = 30;
    this.enableResend = false;
    // setTimeout(() => {
    //   this.enableResend = true;
    // }, 30000);

    let interval = setInterval(() => {
      this.timer = this.timer - 1;
      if(this.timer == 0){
        this.enableResend = true;
        clearTimeout(interval);
      }
    }, 1000);
  }

  verifyOtp() {
    if (this.enteredOtp.trim() == "") {
      this.isInvalid = true;
      this.invalidText = "Please enter OTP";
    } else if (this.enteredOtp.trim() != "") {
      let otp = localStorage.getItem('_otp');
      if (this.enteredOtp.trim() == otp) {
        this.router.navigate(['user-info']);
      } else {
        this.retryCount = this.retryCount + 1;
        if (this.retryCount == 3) {
          this.commonService.openToast("Maximum limit exceeded.");
          this.commonService.applyLogout();
        } else {
          this.isInvalid = true;
          this.invalidText = "Wrong OTP. Please try again.";
        }

      }
    }
    // this.router.navigate(['user-info']);

  }

  redendOtp() {
    // this.enableResend = false;
    this.retryCount = 0;
    this.isInvalid = false;
    let pnoneNumber = localStorage.getItem('_phone');
    // let otp = localStorage.getItem('_otp');
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;

    let req = {
      "phoneNumber": pnoneNumber,
      "otp": random
    };

    // localStorage.setItem('_phone', this.phoneNumber);
    localStorage.setItem('_otp', random.toString());

    this.otpService.getOtp(req).subscribe(
      res => {
        debugger
      },
      err => {
        
      });
    this.commonService.openToast("OTP has been sent to " + pnoneNumber);
    this.startTimer();
    // this.router.navigate(['verify-otp']);

  }


}
