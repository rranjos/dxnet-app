import { Component } from '@angular/core';
import { UploadFileService } from '../service/service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  fileName = '';
  public formData = new FormData();
  public selectedFile!: File;
  public imageSrc!: string;
  public isSend = false;

    constructor(private uploadService: UploadFileService) {}

    onFileSelected(event: any) {
      this.selectedFile = event.target.files[event.target.files.length - 1] as File;
    }

    performUpload() {
      this.formData.set('file', this.selectedFile, this.selectedFile.name);
      this.uploadService.upload(this.formData).subscribe(
              (res) => {
              this.imageSrc = res;
              this.isSend = true;
    }
  );
  }

}
