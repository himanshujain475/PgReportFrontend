import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/HttpService';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AddViewUserComponent } from './add-view-user/add-view-user.component';
import { Decode64Pipe } from './model/Decode64';
import { AuthService } from './service/AuthService';
import { UserAccessGuard } from './service/AuthGuard';
import { ExpenditureComponent } from './expenditure/expenditure.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HeaderComponent,
    Decode64Pipe,
    AddViewUserComponent,
    ExpenditureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule,
     AlertModule.forRoot(),
     ReactiveFormsModule
     //BrowserAnimationsModule
    // CookieService
  ],
  exports: [
    Decode64Pipe],
  providers: [HttpService,UserAccessGuard,AuthService
    //,    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
