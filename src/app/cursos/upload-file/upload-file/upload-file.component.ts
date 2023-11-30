import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  onChange(event: any) {
    const selectedFiles = <FileList>event?.srcElement?.files;
  
    if (selectedFiles && selectedFiles.length > 0) {
      // console.log(selectedFiles[0].name);
      document.getElementById("customFileLabel")!.innerHTML = selectedFiles[0].name;
    } else {
      console.warn('Nenhum arquivo selecionado.');
    }
  }
}
