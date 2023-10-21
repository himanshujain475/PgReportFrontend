import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

  cards=[
    {
      "name":"Sept 2023",
      "typeFlag": false,
      "type":[{
        "name":"Vegetable",
        "typeFlag": false,
        "expenditure":[
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
        ]
      },
      {
        "name":"Maintaience",
        "typeFlag": false,
        "expenditure":[
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
        ]
      }
    ]
    },
    {
      "name":"Sept 2023",
      "typeFlag": false,
     
      "type":[{
        "name":"Vegetable",
        "typeFlag": false,
        "expenditure":[
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
        ]
      },
      {
        "name":"Maintaience",
        "typeFlag": false,
        "expenditure":[
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
        ]
      }
    ]
    },
    {
      "name":"Sept 2023",
      "typeFlag": false,
     
      "type":[{
        "name":"Vegetable",
        "typeFlag": false,
        "expenditure":[
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
        ]
      },
      {
        "name":"Maintaience",
        "typeFlag": false,
        "expenditure":[
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
        ]
      }
    ]
    },
    {
      "name":"Sept 2023",
      "typeFlag": false,
     
      "type":[{
        "name":"Vegetable",
        "typeFlag": false,
        "expenditure":[
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
        ]
      },
      {
        "name":"Maintaience",
        "typeFlag": false,
        "expenditure":[
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
          {"name":"sabji","createdOn":"23-08-2023","amount":"789"},
        ]
      }
    ]
    },
    {
      "name":"Oct 2023",
      "typeFlag": false,
     
      "type":[{
        "name":"Maintainence",
        "typeFlag": false,
        "expenditure":[
          {"name":"","createdOn":"","amount":""},
          {"name":"","createdOn":"","amount":""},
          {"name":"","createdOn":"","amount":""},
          
        ]
      }
    ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  addExpenditure(i,j){

  }

  deleteExpenditure(l,m,n){
    for(let i=0;i<this.cards.length;i++){

      if(i==l){
        for(let j=0;j<this.cards[i].type.length;j++){
            if(j==m){
              this.cards[i].type[j].expenditure.splice(n, 1);
            }
        }
      }
      
    }
  }

}
