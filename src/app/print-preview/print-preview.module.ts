import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrintPreviewPage } from './print-preview.page';
import { PrintPreviewService } from "./print-preview.service";

const routes: Routes = [
  {
    path: '',
    component: PrintPreviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrintPreviewPage],
  providers: [PrintPreviewService]
})
export class PrintPreviewPageModule {}
