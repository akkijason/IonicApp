import { Injectable } from '@angular/core';
import { NetworkService } from "../common/network.service";

@Injectable()
export class AuthService {

    constructor(private _networkService: NetworkService) { }

    getLocation(empCode: any) {
        return this._networkService.get("Corporate/GetLocationsByCompCode?compCode=" + empCode, null, null, 'basic');
    }

    validateLogin(req: any) {
        return this._networkService.get("Corporate/OperatorLogin?compCode=" + req['compCode']+ "&locCode=" + req['locCode'] +
         "&oprName=" + req['username']+ "&oprPassword=" + req['password'], null, null, 'basic');
    }

}