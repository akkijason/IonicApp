import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'otp', loadChildren: './otp/otp.module#OtpPageModule' },
  { path: 'verify-otp', loadChildren: './verify-otp/verify-otp.module#VerifyOtpPageModule' },
  { path: 'user-info', loadChildren: './user-info/user-info.module#UserInfoPageModule' },
  { path: 'host-info', loadChildren: './host-info/host-info.module#HostInfoPageModule' },
  { path: 'user-picture', loadChildren: './user-picture/user-picture.module#UserPicturePageModule' },
  { path: 'print-preview', loadChildren: './print-preview/print-preview.module#PrintPreviewPageModule' },
  { path: 'checkin-success', loadChildren: './checkin-success/checkin-success.module#CheckinSuccessPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
