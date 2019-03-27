import { Injectable } from '@angular/core';
// import { NetworkService } from '../common/network.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/common.service';

@Injectable()
export class OtpService{

    constructor( private http: HttpClient, private _commonService: CommonService ){}

    getOtp(req: any){
        return this.http.get('https://www.smsjust.com/blank/sms/user/urlsmstemp.php?username=areteinfo&pass=123456&senderid=ARETET&dest_mobileno='+
        req['phoneNumber']+'&tempid=39358&F1=Areteinfo&F2='+ req['otp'] +'&response=Y', this._commonService.getToken('basic'));        
    }
}