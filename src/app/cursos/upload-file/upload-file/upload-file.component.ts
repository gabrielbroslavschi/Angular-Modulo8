import { Component } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  preserveWhitespaces: true,
})
export class UploadFileComponent {
  files!: Set<File>;
  progress: number = 0;

  constructor(private service: UploadFileService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onChange(event: any) {
    const selectedFiles = <FileList>event?.srcElement?.files;

    const fileNames = [];
    this.files = new Set();

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    document.getElementById('customFileLabel')!.innerHTML =
      fileNames.join(', ');
    this.progress = 0;
  }

  onUplad() {
    if (this.files && this.files.size > 0) {
      this.service
        .upload(this.files, '/api/upload')
        .subscribe((event: HttpEvent<Object>) => {
          // HttpEventType
          // console.log(res);

          // console.log(event);

          if (event.type == HttpEventType.Response) {
            // console.log('Upload Concluído');
          } else if (
            event.type == HttpEventType.UploadProgress &&
            event.total
          ) {
            const percentDone = Math.round((event.loaded * 100) / event.total);
            // console.log('Progress => ', percentDone);
            this.progress = percentDone;
          }
        });
    }
  }

  downloadPDF() {
    this.service.download('/api/downloadPDF').subscribe((res: any) => {
      this.service.downloadFile(res, "teste.pdf");
    });
  }

  downloadExcel() {
    this.service.download('/api/downloadExcel').subscribe((res: any) => {
      this.service.downloadFile(res, "teste.xlsx");
    });
  }

  
}
