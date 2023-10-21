import { Injectable } from '@angular/core';

@Injectable({

    providedIn: 'root',

})
export class AuthService {

  constructor() { }

  isLoggedIn() {

 //   return true;
    
    const token = localStorage.getItem("authorization");
    if(token == null || token ==''){
        return false;
    }
    else {
        return true;
    }
  }

}