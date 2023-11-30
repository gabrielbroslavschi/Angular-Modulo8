import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confrm-modal',
  templateUrl: './confrm-modal.component.html',
  styleUrls: ['./confrm-modal.component.css'],
})
export class ConfrmModalComponent {
  @Input() title!: string;
  @Input() body!: string;
  @Input() confirm = 'Sim';
  @Input() cancel = 'Não';

  confirmResult!: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }
}
