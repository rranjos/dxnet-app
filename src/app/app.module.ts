import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';  
import { JwtInterceptor } from './service/authInterceptorService ';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {  
      provide: HTTP_INTERCEPTORS,  
      useClass: JwtInterceptor,  
      multi: true  
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
