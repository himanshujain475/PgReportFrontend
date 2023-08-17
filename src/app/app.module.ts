import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/HttpService';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ngx-bootstrap/alert';
//import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule,
     AlertModule.forRoot(),
    // CookieService
  ],
  providers: [HttpService
    //,    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
