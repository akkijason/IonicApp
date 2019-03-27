import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from '../common/common.service';
import { OtpService } from './otp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  phoneNumber: any;
  isInvalid: boolean = true;
  invalidText: string = "Required field";
  formSubmitted: boolean = false;

  constructor(private router: Router, public commonService: CommonService,
    private otpService: OtpService) { }

  ngOnInit() {
    this.isInvalid = true;
    this.invalidText = "Required field";
    this.formSubmitted = false;
  }

  phoneNumberChanged(event: any) {
   
    if (event.trim() == "") {
      this.isInvalid = true;
      this.invalidText = "Required field";
    } else if (event.trim().length != 10) {
      this.isInvalid = true;
      this.invalidText = "Phone number must be of 10 digits.";
    } else {
      this.isInvalid = false;
      this.invalidText = "Required field";
    }
  }

  getOtp() {
    this.formSubmitted = true;
    if (!this.isInvalid) {
      let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      let req = {
        "phoneNumber": this.phoneNumber,
        "otp": random
      };

      localStorage.setItem('_phone', this.phoneNumber);
      localStorage.setItem('_otp', random.toString());

      this.otpService.getOtp(req).subscribe(
        res => {
          debugger
        },
        err => {
          debugger
        });
        this.commonService.openToast("OTP has been sent to " + this.phoneNumber);
      this.router.navigate(['verify-otp']);

    }
    
  }
}
