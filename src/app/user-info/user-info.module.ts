import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from "../common/shared.module";
import { UserInfoPage } from './user-info.page';
import { UserInfoService } from "./user-info.service";

const routes: Routes = [
  {
    path: '',
    component: UserInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserInfoPage],
  providers: [UserInfoService]
})
export class UserInfoPageModule {}
