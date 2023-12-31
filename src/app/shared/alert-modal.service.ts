import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfrmModalComponent } from './confrm-modal/confrm-modal.component';

export enum AlertTypes{
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes){
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: string){
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSucess(message: string){
    this.showAlert(message, AlertTypes.SUCCESS)
  }

  showConfirm(title: string, msg: string, confirm?: string, cancel?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfrmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.body = msg;

    if (confirm) {
      bsModalRef.content.confirm = confirm;
    }

    if (cancel) {
      bsModalRef.content.cancel = cancel;
    }

    return (<ConfrmModalComponent>bsModalRef.content).confirmResult;
  }
}


