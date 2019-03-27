import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './home.service';
import { LoaderService } from '../common/loader.service';
import { CommonService } from '../common/common.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginForm: FormGroup;
  formSubmitted: boolean = false;
  locationCodes = [];

  constructor(private router: Router, private formBuilder: FormBuilder,
    private authService: AuthService, private loaderService: LoaderService, private commonService: CommonService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    debugger
    this.loginForm = this.formBuilder.group({
      companyCode: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
      locationCode: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      let req = {
        compCode: this.loginForm.controls['companyCode'].value,
        locCode: this.loginForm.controls['locationCode'].value,
        username: this.loginForm.controls['userName'].value,
        password: this.loginForm.controls['password'].value
      };
      this.loaderService.show();
      debugger
      this.authService.validateLogin(req).subscribe(
        res => {
          debugger
          this.loaderService.hide();
          if (res['response'] == "SUCCESS") {
            localStorage.setItem("_lgnobj", JSON.stringify(res));
            this.router.navigate(['/welcome']);
          } else {
            this.commonService.openToast("Problem in login!");
          }
        },
        err => {
          this.loaderService.hide();
          if (err['status'] == 404) {
            this.commonService.openToast("Inactive user!");
          } else {
            this.commonService.openToast("Problem in login!");
          }
        });
    }
  }

  companyCodeChanged(event: any) {

    this.locationCodes = [];
    this.ref.detectChanges(); 
    this.loginForm.controls['locationCode'].setValue('');
    if (event.length == 4) {
      this.loaderService.show();
      debugger
      this.authService.getLocation(event).subscribe(
        (res) => {
          debugger
          this.loaderService.hide();
          if (res['response'] == "SUCCESS") {
            this.locationCodes = res['location'];
          } else {
            this.commonService.openToast("Problem in getting Locations!");
          }
        },
        err => {
          this.loaderService.hide();
          if (err['status'] == 404) {
            this.commonService.openToast("Invalid company code!");
          } else {
            this.commonService.openToast("Problem in getting Locations!");
          }
        });
    }
  }
}
