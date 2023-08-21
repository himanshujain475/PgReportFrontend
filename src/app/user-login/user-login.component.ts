import { Component, OnInit, Testability } from '@angular/core';
import { Constants } from '../model/constant';
import { Login } from '../model/login';
import { HttpService } from '../service/HttpService';
import { EncyptedService } from '../service/EncryptedService';
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
  alreadyGeneratedSalt : string ="";

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(private http:HttpService, private encryptedService: EncyptedService
    //private cookieService:CookieService
    ) { }

  ngOnInit() {
  }

  validatePassword(event,key){
    let password = event.target.value;

    if(password != 0){
      if(!(password.length == 4)){
        if(!this.containsError(key)){
          this.errorList.push({key:key,value:"Password Should be of 4 digits"});
        }
     }
      else{
        if(this.containsError(key)){
          for(let i=0;i<this.errorList.length;i++){
            if(this.errorList[i].key == key){
              this.errorList.splice(i,1);  
            }            
          }            
        }        
      }
    }
  }

   
  

  validateMobileNo(event){
    let mobile=event.target.value;
    console.log(mobile)
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
          if(res.status ==200){
            this.signUp = true;

          }
          else if(res.status =400){
            this.alreadyGeneratedSalt = res.salt;
          }
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
    if(this.signUp){
      if(this.password != this.passwordCheck){
        if(!this.containsError("PinRepeat")){
          this.errorList.push({"key":"PinRepeat","value":"Pin does not match"});
        }
      }
      else{
        if(this.containsError("PinRepeat")){
          for(let i=0;i<this.errorList.length;i++){
            if(this.errorList[i].key == "PinRepeat"){
              this.errorList.splice(i,1);  
            }            
          }            
        }   
        if(this.errorList.length ==0){
          let salt = this.encryptedService.generateRandomString(Constants.SALT_NO);
          this.login.pin = this.encryptedService.hashPassword(this.password,salt);
         this.login.salt = salt;
         
          let url=Constants.BASE_URL+ Constants.ADD_USER_URL;
          this.http.postRequest(url,this.login).subscribe(response=>{
            if(response.status ==200){
              
            }            
          });
        }     
      }
      
     
    }
    else{
      let url =Constants.BASE_URL+ Constants.LOGIN_URL;
      this.login.pin = this.encryptedService.hashPassword(this.password,this.alreadyGeneratedSalt);
      this.login.salt = this.alreadyGeneratedSalt;
      
    this.http.postRequest(url,this.login).subscribe(response=>{
      if(response.status ==200){
        Constants.AUTH_TOKEN = response.response;
        localStorage.setItem("authorization",Constants.AUTH_TOKEN);
      }
      console.log(Constants.AUTH_TOKEN);
    });
    }
   // Constants.HEADERS.set("","");
    
    //this.cookieService.set('Test', 'Hello World');



  }

}
