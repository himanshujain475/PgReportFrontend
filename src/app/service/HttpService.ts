import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Constants } from "../model/constant";


@Injectable({
    providedIn: 'root',
   })
   export class HttpService{
       
       ngOnInit(){}
    
    constructor(private http:HttpClient){ 
        Constants.HEADERS.set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
        
       

     }

    getRequest(url:string): Observable<any> {
      return  this.http.get(url);
    }

    postRequest(url:string, obj:Object):Observable<any> {
        return  this.http.post(url,obj);
      }
   }