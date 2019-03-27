import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {UserRolesDirective} from '../directives/user-roles.directive';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { ExcelService } from '../excel.service';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { HeaderComponent } from "../header/header.component";
import { CommonService } from "./common.service";
// import { LoaderService } from './loader.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    // UserRolesDirective
    // HeaderComponent
  ],
  exports: [
    // UserRolesDirective,
    // NgxSpinnerModule,
    // NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    // NgMultiSelectDropDownModule,
    // NgbModule
  ],
  providers: [CommonService]
})
export class SharedModule { }
