import { Injectable } from "@angular/core";
import { finalize, tap } from "rxjs/operators";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Router } from "@angular/router";
// import { LoadingController } from '@ionic/angular';
import { LoaderService } from '../loader.service';


/*
Purpose: to handle all API errors at single level 
*/
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

    loading: any;

  constructor(private router: Router, private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //let clone: HttpRequest<any>;
    return next.handle(req).pipe(
      tap(
        event => {
        //   try{
        //     // debugger
        //     let authToken = event['headers'].get("x-auth-token");
        //     if(authToken)
        //     sessionStorage.setItem('_bearerTkn', authToken);
        //   }catch(err){}
          this.onSuccess(event);
        },
        error => {
          this.onError(error);
        }
      ),
      finalize(() => {})
    );
  }

  /* onSuccess() method will handle success response*/
  private onSuccess(event: any) {
   
  }

  /* onError() method will handle failure response*/
  async onError(error: any) {
      // debugger
      // this.loaderService.hide();
    // this.loading  = await this.loadingController.create({
    //     message: 'Loading...'
    //   });
    // this.loading.dismiss();
    // this.spinner.hide();
    // Swal.fire({
    //   type: "error",
    //   title: "Oops...",
    //   text: "Something went wrong!"
    // });
  }
}
