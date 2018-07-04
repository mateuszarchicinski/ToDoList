import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const AppCommonModules = [
  CommonModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [...AppCommonModules],
  exports: [...AppCommonModules],
})
export class AppCommonModule {
}
