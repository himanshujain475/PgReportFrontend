import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';
import { Constants } from "../model/constant";

@Injectable({
    providedIn: 'root',
   })
   export class EncyptedService{
 
    hashPassword(pin:number,salt: string) {
        let saltedpin =pin+this.generateRandomString(Constants.SALT_NO) ;
        const hashedPassword = CryptoJS.SHA256(saltedpin).toString(CryptoJS.enc.Hex);
        return hashedPassword;
      }

     generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charLength = characters.length;
        let randomString = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charLength);
          randomString += characters.charAt(randomIndex);
        }
      
        return randomString;
      }
   }