import { Component } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent {
  files!: Set<File>;

  constructor(private service: UploadFileService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  onChange(event: any) {
    const selectedFiles = <FileList>event?.srcElement?.files;

    const fileNames = [];
    this.files = new Set()

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    document.getElementById('customFileLabel')!.innerHTML =
      fileNames.join(', ');
  }

  onUplad() {
    if(this.files && this.files.size > 0){
      this.service.upload(this.files, "http://localhost:8000/upload").subscribe(res => console.log("Upload Concluído"));
    }
  }
}
