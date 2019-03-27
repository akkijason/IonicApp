import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VerifyOtpPage } from './verify-otp.page';
import { OtpService } from '../otp/otp.service';

const routes: Routes = [
  {
    path: '',
    component: VerifyOtpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerifyOtpPage],
  providers: [OtpService]
})
export class VerifyOtpPageModule {}
