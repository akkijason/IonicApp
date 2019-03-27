import { Injectable } from '@angular/core';
import { NetworkService } from "../common/network.service";

@Injectable()
export class HostService {

    constructor(private _networkService: NetworkService) { }

    getHost(req: any) {
        return this._networkService.get("Visitor/SearchHostbyName?compCode=" + req['company'] +
         "&locCode=" + req['location']+ "&empName=" + req['name'], null, null, 'basic');
    }

}