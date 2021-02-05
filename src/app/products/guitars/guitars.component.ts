import { Component, OnInit } from '@angular/core';
import { DataService } from'src/app/shared/instruments.component'


@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.scss']
})
export class GuitarsComponent implements OnInit {

  guitarAmount = 0;
  elecrticGuitarAmount1 = 0;
  elecrticGuitarAmount2 = 0;
  lesPaulGuitarAmount = 0;
  amount : number;
  guitarFav = 0;
  elecrticGuitarFav1 = 0;
  elecrticGuitarFav2 = 0;
  lesPaulGuitarFav = 0;
  Fav : number
  
  
  constructor(private data:DataService) { }
  
  
  ngOnInit(): void {
    this.data.fullAmount2.subscribe(amount => this.amount = amount)
    this.data.favorite2.subscribe(Fav=> this.Fav=Fav)
   
   
  }
  updateGuitarCart(x){
    if(x.value > 0 && x.value < 100){
      this.guitarAmount =  x.value;
      this.data.countg(this.amount+ parseInt(this.guitarAmount.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  addToFav(x){
    if(x.value > 0 && x.value < 100){
      this.guitarFav =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.guitarFav.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateElectricGuitarCart1(x){
    if(x.value > 0 && x.value < 100){
      this.elecrticGuitarAmount1 =  x.value;
      this.data.countg(this.amount+ parseInt(this.elecrticGuitarAmount1.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  addToElectricGuitar1Fav(x){
    if(x.value > 0 && x.value < 100){
      this.elecrticGuitarFav1 =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.elecrticGuitarFav1.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateElectricGuitarCart2(x){
    if(x.value > 0 && x.value < 100){
      this.elecrticGuitarAmount2 =  x.value;
      this.data.countg(this.amount+ parseInt(this.elecrticGuitarAmount2.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  addToElectricGuitar2Fav(x){
    if(x.value > 0 && x.value < 100){
      this.elecrticGuitarFav2 =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.elecrticGuitarFav2.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateLesPaulGuitarCart(x){
    if(x.value > 0 && x.value < 100){
      this.lesPaulGuitarAmount =  x.value;
      this.data.countg(this.amount+ parseInt(this.lesPaulGuitarAmount.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  addToLesPaulGuitarFav(x){
    if(x.value > 0 && x.value < 100){
      this.lesPaulGuitarFav =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.lesPaulGuitarFav.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  

}
