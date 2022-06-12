import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  expenditureArray=[
    {
      
      label:"Wifi",
      total:1000,
      time:"12:28"
    },
    {
      
      label:"Wifi",
      total:1000,
      time:"12:28"
    },
    {
      
      label:"Wifi",
      total:1000,
      time:"12:28"
    },
    {
      
      label:"Wifi",
      total:1000,
      time:"12:28"
    }
  ]

}
