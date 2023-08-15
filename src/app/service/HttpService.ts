import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
   })
   export class HttpService{
       ngOnInit(){}
    
    constructor(private http:HttpClient){  }

    getRequest(url:string){
        this.http.get(url).subscribe(res=>{
            

        },(error)=>{

        })
    }
    postRequest(url:string,obj:Object){

    }
   }