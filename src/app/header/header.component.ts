import { Component, OnInit } from '@angular/core';
import { TransferService } from '../service/TransferService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authorization:boolean= false;
  constructor(private transferService:TransferService,private router: Router) { }

  ngOnInit() {
    let auth = localStorage.getItem("authorization");
    
    if(auth){
      this.transferService.updateLogOutButton(true);    
    }
    this.transferService.logOutButton.asObservable().subscribe(auth=>this.authorization= auth);    
  }

  logOut(){ 
    localStorage.setItem("authorization","");
    this.transferService.updateLogOutButton(false);    
    this.router.navigate( ['login']);
  }

}
