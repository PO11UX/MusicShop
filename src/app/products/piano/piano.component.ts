import { Component, OnInit } from '@angular/core';
import { DataService } from'src/app/shared/instruments.component'

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {

  piano1Amount = 0;
  piano2Amount = 0;
  piano3Amount = 0;
  piano4Amount = 0;
  amount : number;
  piano1Fav = 0;
  piano2Fav = 0;
  piano3Fav = 0;
  piano4Fav = 0;
  Fav : number;
  
  
  constructor(private data:DataService) { }
  
  
  ngOnInit(): void {
    this.data.fullAmount2.subscribe(amount => this.amount = amount)
    this.data.favorite2.subscribe(Fav=> this.Fav=Fav)
   
   
  }
  updatePianoCart1(x){
    if(x.value > 0 && x.value < 100){
      this.piano1Amount =  x.value;
      this.data.countg(this.amount+ parseInt(this.piano1Amount.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updatePianoFav1(x){
    if(x.value > 0 && x.value < 100){
      this.piano1Fav =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.piano1Fav.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updatePianoCart2(x){
    if(x.value > 0 && x.value < 100){
      this.piano2Amount =  x.value;
      this.data.countg(this.amount+ parseInt(this.piano2Amount.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updatePianoFav2(x){
    if(x.value > 0 && x.value < 100){
      this.piano2Fav =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.piano2Fav.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updatePianoCart3(x){
    if(x.value > 0 && x.value < 100){
      this.piano3Amount =  x.value;
      this.data.countg(this.amount+ parseInt(this.piano3Amount.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updatePianoFav3(x){
    if(x.value > 0 && x.value < 100){
      this.piano3Fav =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.piano3Fav.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updatePianoCart4(x){
    if(x.value > 0 && x.value < 100){
      this.piano4Amount =  x.value;
      this.data.countg(this.amount+ parseInt(this.piano4Amount.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updatePianoFav4(x){
    if(x.value > 0 && x.value < 100){
      this.piano4Fav =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.piano4Fav.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  
}
