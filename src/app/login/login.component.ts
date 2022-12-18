import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { UploadFileService } from '../service/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private uploadService: UploadFileService) { }

  public formData = new FormData();
  public selectedFile!: File;
  public imageSrc!: string;
  public isSend = false;
  public login = true;
  public error = false;
  public sayHello = false;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[event.target.files.length - 1] as File;
  }

  performUpload() {
    this.formData.set('file', this.selectedFile, this.selectedFile.name);
    this.uploadService.login(this.formData).subscribe(
      (res) => {
        sessionStorage.setItem('token', res.token);
        this.uploadService.hello().subscribe(
          (response) => {
            if(response === 'ok'){
              this.sayHello = true;
              this.error = false;
              this.login = false;
            }else{
              this.error = true;  
            }
          },
          
        );
      },
      (error) => {
        this.error = true;  
      }
    );
    
  }


}
