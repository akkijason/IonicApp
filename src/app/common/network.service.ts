import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CommonService } from "../common/common.service";


@Injectable()
export class NetworkService {

  private apiBasePath = environment.apiUrl;
//   private apiBasePathUser = environment.userApiUrl;

  // private apiBasePath = "";    

  constructor(private http: HttpClient, private _commonService : CommonService) { }

  createAuthorizationHeader(headers: HttpHeaders, basic: any): HttpHeaders {
    // let token = localStorage.getItem('_tkn');
    // if (endpoint == this.CORE_ENDPOINT || endpoint == this.TXN_MANAGEMENT || endpoint == this.MNG_USER_ENDPOINT || endpoint == this.HIERARCHY_ENDPOINT) {
    //   return headers.set('Authorization', 'Bearer ' + token);
    // } else if (endpoint === 'basic') {
    //   return headers.set('Authorization', 'Basic d2ViQ2xpZW50OndlYkNsaWVudFNlY3JldA==');
    // } else {
    //   return headers.set('Authorization', 'Basic QWdlbnQ6QWdlbnQ=' + token);

    // }
    return headers;
  }

  get(url:any, param?: any, head?: any,auth?:any): Observable<any> {
      return this.http.get(this.apiBasePath + url, this._commonService.getToken(auth));
  }

  post(url:any, param?: any, head?: any, auth?: any): Observable<any> {
    return this.http.post(this.apiBasePath + url, param, this._commonService.getToken(auth));
  }

  uploadImages(url:any, param?: any, head?: any, auth?: any): Observable<any> {
    return this.http.post(this.apiBasePath + url, param);
  }

  put(url:any, param?: any, head?: any, auth?: any): Observable<any> {   
    return this.http.put(this.apiBasePath + url, param, this._commonService.getToken(auth));
  }

}
