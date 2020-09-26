import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainModule } from './layout/main/main.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MainModule
  ],
  exports:[
    MainModule
  ]
})
export class CoreModule { }
