import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from "../common/common.service";
import { LoaderService } from '../common/loader.service';
import { UserInfoService } from "./user-info.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  visitorForm: FormGroup;
  formSubmitted: boolean = false;
  userData: any;
  visitorTypes = [];

  constructor(private formBuilder: FormBuilder, private router: Router, public commonService: CommonService,
    private loaderService: LoaderService, private userInfoService: UserInfoService) { }

  ngOnInit() {
    debugger
    this.initializeVisitorForm();
    this.userData = JSON.parse(localStorage.getItem('_lgnobj'));
    this.visitorTypes = this.userData['visitorType'];
    let userInfo = JSON.parse(localStorage.getItem('_userInfo'));
    if (userInfo) {
      this.initializeUserInfo(userInfo);
    } else {
      this.getUserInfo();
    }
  }

  getUserInfo() {
    let req = {
      "company": this.userData['compCode'],
      "location": this.userData['locCode'],
      "mobile": localStorage.getItem('_phone')

    }
    this.loaderService.show();
    this.userInfoService.getUserInfo(req).subscribe(
      res => {
        debugger
        this.loaderService.hide();
      },
      err => {
        this.loaderService.hide();
        debugger
      });
  }

  initializeUserInfo(userInfo: any) {
    this.visitorForm.controls['name'].setValue(userInfo['name']);
    this.visitorForm.controls['companyName'].setValue(userInfo['companyName']);
    this.visitorForm.controls['mobile'].setValue(userInfo['mobile']);
    this.visitorForm.controls['visitorType'].setValue(userInfo['visitorType']);
  }

  // phoneNumberChanged(event: any) {
  // if (event.trim() == "") {
  //   this.isInvalid = true;
  //   this.invalidText = "Required field";
  // } else if (event.trim().length != 10) {
  //   this.isInvalid = true;
  //   this.invalidText = "Phone number must be of 10 digits.";
  // } else {
  //   this.isInvalid = false;
  //   this.invalidText = "Required field";
  // }
  // }

  initializeVisitorForm() {
    this.visitorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      mobile: [localStorage.getItem('_phone'), [Validators.required, Validators.minLength(10)]],
      visitorType: ['', [Validators.required]]
    });
  }

  get f() { return this.visitorForm.controls; }

  saveDetails() {
    this.formSubmitted = true;
    if (this.visitorForm.valid) {
      let userData = {
        "name": this.visitorForm.controls['name'].value,
        "companyName": this.visitorForm.controls['companyName'].value,
        "mobile": this.visitorForm.controls['mobile'].value,
        "visitorType": this.visitorForm.controls['visitorType'].value
      };
      localStorage.setItem('_userInfo', JSON.stringify(userData));
      this.router.navigate(['host-info']);
    }
    // this.router.navigate(['host-info']);

  }



}
