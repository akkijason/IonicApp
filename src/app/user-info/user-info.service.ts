import { Injectable } from '@angular/core';
import { NetworkService } from "../common/network.service";

@Injectable()
export class UserInfoService {

    constructor(private _networkService: NetworkService) { }

    getUserInfo(req: any) {
        return this._networkService.get("Visitor/GetVisitorDetailsByMobileNo?mobileNo="+ req['mobile']+"&compCode="+ req['company'] +"&locCode=" + req['location'], null, null, 'basic');
    }

}