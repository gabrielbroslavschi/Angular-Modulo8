import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfrmModalComponent } from './confrm-modal/confrm-modal.component';



@NgModule({
  declarations: [
    AlertModalComponent,
    ConfrmModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AlertModalComponent, ConfrmModalComponent]
})
export class SharedModule { }
