import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoaderService } from '../common/loader.service';
import { PrintPreviewService } from "./print-preview.service";
import { CommonService } from "../common/common.service";

@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.page.html',
  styleUrls: ['./print-preview.page.scss'],
})
export class PrintPreviewPage implements OnInit {

  printData = {};

  constructor( private router: Router, private loaderService: LoaderService,
    private printPreviewService: PrintPreviewService, private commonService: CommonService ) { }

  ngOnInit() {
    this.getPrintDetails();
  }

  getPrintDetails(){
    let imgData = localStorage.getItem("_userImg");
    let userData = JSON.parse(localStorage.getItem("_userInfo"));
    let hostData = JSON.parse(localStorage.getItem("_hostInfo"));

    this.printData["imgData"] = imgData ? imgData : "assets/images/placeholder-gen.png";
    this.printData["userData"] = userData;
    this.printData["hostData"] = hostData;
    // this.loaderService.show();
    // this.printPreviewService.getPrintDetails().subscribe(
    //   res => {
    //     this.loaderService.hide();
    //   },
    //   err => {
    //     this.loaderService.hide();
    //   });
  }

  print(){
    this.commonService.openToast("Success");
    this.commonService.applyLogout();
    // this.router.navigate(['checkin-success']);
  }

}
