import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/instruments.component';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private data:DataService ) {}
  amount : number;
  Fav : number;
  
  
  ngOnInit(): void {
     this.data.fullAmount2.subscribe(amount => this.amount = amount)
     this.data.favorite2.subscribe(Fav=> this.Fav=Fav)
    
    }
  

  


}
