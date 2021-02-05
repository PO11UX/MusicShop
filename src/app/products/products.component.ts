import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from'src/app/shared/instruments.component'




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // serverName= '';
  // instruments: Instrumets[] =  [
  //   new Instrumets ('guitar', 5),
  //   new Instrumets ('electric guitar', 10)

  // ];
  
  // guitarPrice = 150;
  // elecrticGuitarPrice = 300;
  // lesPaulGuitarPrice = 350;
  // guitar_price = '0';
  // elecrtic_guitar_price = '0';
  // lesPaul_guitar_price = '0';
  
 
  
  
  constructor() { }
  
  
  ngOnInit(): void {
    
   
   
  }
 

}
