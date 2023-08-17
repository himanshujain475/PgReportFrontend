import { Component, OnInit, Testability } from '@angular/core';
import { Constants } from '../model/constant';
import { Login } from '../model/login';
import { HttpService } from '../service/HttpService';
//import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  mobileNo : number;
  password: number;

  login :Login;
  errorList = new Array();
  signUp:boolean = false;
  passwordCheck: number ;
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(private http:HttpService
    //private cookieService:CookieService
    ) { }

  ngOnInit() {
  }

  validatePassword(event){
    let password = event.target.value;

    if(password != 0){
      if(!(password.length == 4)){
        if(!this.containsError("Password")){
          this.errorList.push({key:"Password",value:"Password Should be of 4 digits"});
        }
     }
      else{
        if(this.containsError("Password")){
          for(let i=0;i<this.errorList.length;i++){
            if(this.errorList[i].key == "Password"){
              console.log(this.errorList);
              this.errorList.splice(i,1);  
            }            
          }            
        }        
      }
    }
  }

  validateMobileNo(event){
    let mobile=event.target.value;
    
    if(mobile != 0){
      if(!(mobile.length == 10)){
        if(!this.containsError("Mobile")){
          this.errorList.push({key:"Mobile",value:"Mobile Should be of 10 digits, without nationality code"});
          
        }
     }
      else{
        if(this.containsError("Mobile")){
          for(let i=0;i<this.errorList.length;i++){
            if(this.errorList[i].key == "Mobile"){
              this.errorList.splice(i,1);  
            }            
          } 
        }
        let USER_PRESENT_URL = Constants.BASE_URL + Constants.USER_PRESENT_URL;
        this.login = new Login();
        this.login.mobile=mobile;
        this.http.postRequest(USER_PRESENT_URL,this.login).subscribe(res=>{
          console.log(res);
          if(res.status ==200){
            this.signUp = true;
          }
          else if(res.status =400){}
        }); 
     
      }
    }
  
  }

  containsError(key){
    for(let i=0;i<this.errorList.length;i++){
      if(this.errorList[i].key ==key){
        return true;
      }
    }
    return false;
  }


  logIn(){
    this.login = new Login();
    this.login.mobile = this.mobileNo;
    this.login.password = this.password;
    let url =Constants.BASE_URL+ Constants.AUTH_TOKEN;
   // Constants.HEADERS.set("","");
    
    //this.cookieService.set('Test', 'Hello World');

    this.http.postRequest(url,this.login).subscribe(response=>{
      if(response.status ==200){
        console.log(response);
      }
        
    });


  }

}
