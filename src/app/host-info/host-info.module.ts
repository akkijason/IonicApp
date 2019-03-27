import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HostInfoPage } from './host-info.page';
import { HostService } from "./host-info.service";

const routes: Routes = [
  {
    path: '',
    component: HostInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HostInfoPage],
  providers: [HostService]
})
export class HostInfoPageModule {}
