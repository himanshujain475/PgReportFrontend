import { Component, OnInit, Testability } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  mobileNo : number;
  password: string;
  errorList = new Array();

  constructor() { }

  ngOnInit() {
    this.errorList.push("hello")
  }

}
