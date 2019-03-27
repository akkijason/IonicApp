import { Injectable } from '@angular/core';
import { NetworkService } from "../common/network.service";

@Injectable()
export class PrintPreviewService {

    constructor(private _networkService: NetworkService) { }

    getPrintDetails(empCode: any) {
        return this._networkService.get("GetLocationsByCompCode?compCode=" + empCode, null, null, 'basic');
    }

}