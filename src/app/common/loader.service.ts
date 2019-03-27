import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoaderService {
    loading: any;

    constructor(public loadingController: LoadingController) {

    }

    ngOnInit() {

    }

    async show() {
        // let self = this;
        this.loading = await this.loadingController.create({
            message: 'Loading...'
        });
        this.loading.present();
    }
    hide() {
        if (this.loading) {
            this.loading.dismiss();
        }
    }


}