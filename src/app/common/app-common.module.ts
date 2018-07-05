import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const APP_COMMON_MODULE_IMPORTS = [
  CommonModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [...APP_COMMON_MODULE_IMPORTS],
  exports: [...APP_COMMON_MODULE_IMPORTS],
})
export class AppCommonModule {
}
