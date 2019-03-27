import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from '../common/common.service';
import { LoaderService } from "../common/loader.service";
import { HostService } from "./host-info.service";

@Component({
  selector: 'app-host-info',
  templateUrl: './host-info.page.html',
  styleUrls: ['./host-info.page.scss'],
})
export class HostInfoPage implements OnInit {

  userData:any;
  hostData = [];
  selectedItems = [];
  purpose = [];
  selectedPurpose:any;
  
  constructor( private router: Router, public commonService: CommonService, private loaderService: LoaderService,
    private hostService: HostService ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('_lgnobj'));
    this.purpose = this.userData['purpose'];
  //  this.userData = JSON.parse(localStorage.getItem('_lgnobj'));
  }

  applySearch(event){
    let req = {
      "company": this.userData['compCode'],
      "location": this.userData['locCode'],
      "name": event
    };
    this.loaderService.show();
    this.hostData = [];
    this.hostService.getHost(req).subscribe(
      res => {    
        this.loaderService.hide();
        if(res['response'] == "SUCCESS"){
          this.hostData = res['host'];
          this.hostData.forEach((element, index) => {           
              element.selected = false;            
          });
        }
      },
      err => {
        this.loaderService.hide();       
      });
   
  }

  updateSelection(position, item){
    this.selectedItems = [];
    this.hostData.forEach((element, index) => {
      if (position != index){
        element.selected = false;
      }
    });

    if(item.selected){
      this.selectedItems.push(item);
    }
  }

  goToNext(){
    debugger
    if(this.selectedPurpose && this.selectedItems.length > 0){
      let host = this.selectedItems[0];
      host["purpose"] = this.selectedPurpose;
      localStorage.setItem("_hostInfo", JSON.stringify(host));
      this.router.navigate(['user-picture']);
    }else if(this.selectedItems.length == 0 ){
      this.commonService.openToast("Please select host");
    }else if(!this.selectedPurpose){
      this.commonService.openToast("Please select purpose");
    }
  }

}
