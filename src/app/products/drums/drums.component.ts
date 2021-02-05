import { Component, OnInit } from '@angular/core';
import { DataService } from'src/app/shared/instruments.component'

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.scss']
})
export class DrumsComponent implements OnInit {

  drumAmount1 = 0;
  drumAmount2 = 0;
  drumAmount3 = 0;
  drumAmount4 = 0;
  amount : number;
  drumFav1 = 0;
  drumFav2 = 0;
  drumFav3 = 0;
  drumFav4 = 0;
  Fav : number;
  
  
  constructor(private data:DataService) { }
  
  
  ngOnInit(): void {
    this.data.fullAmount2.subscribe(amount => this.amount = amount)
    this.data.favorite2.subscribe(Fav => this.Fav = Fav)
   
   
  }
  updateDrumCart1(x){
    if(x.value > 0 && x.value < 100){
      this.drumAmount1 =  x.value;
      this.data.countg(this.amount+ parseInt(this.drumAmount1.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateDrumFav1(x){
    if(x.value > 0 && x.value < 100){
      this.drumFav1 =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.drumFav1.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateDrumCart2(x){
    if(x.value > 0 && x.value < 100){
      this.drumAmount2 =  x.value;
      this.data.countg(this.amount+ parseInt(this.drumAmount2.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateDrumFav2(x){
    if(x.value > 0 && x.value < 100){
      this.drumFav2 =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.drumFav2.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  // updateDrumCart3(x){
  //   if(x.value > 0 && x.value < 100){
  //     this.drumAmount3 =  x.value;
  //     this.data.countg(this.amount+ parseInt(this.drumAmount3.toString()));
  //     // this.guitar_price = this.guitarPrice*x.value+'$';
  //   }
  // }
  // updateDrumCart4(x){
  //   if(x.value > 0 && x.value < 100){
  //     this.drumAmount4 =  x.value;
  //     this.data.countg(this.amount+ parseInt(this.drumAmount4.toString()));
  //     // this.guitar_price = this.guitarPrice*x.value+'$';
  //   }
  // }
  

}
