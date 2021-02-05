import { Component, OnInit } from '@angular/core';
import { DataService } from'src/app/shared/instruments.component'

@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.scss']
})
export class LaunchpadsComponent implements OnInit {

  LaunchpadAmount1 = 0;
  LaunchpadAmount2 = 0;
  LaunchpadAmount3 = 0;
  LaunchpadAmount4 = 0;
  amount : number;
  LaunchpadFav1 = 0;
  LaunchpadFav2 = 0;
  LaunchpadFav3 = 0;
  LaunchpadFav4 = 0;
  Fav : number;
  
  
  constructor(private data:DataService) { }
  
  
  ngOnInit(): void {
    this.data.fullAmount2.subscribe(amount => this.amount = amount)
    this.data.favorite2.subscribe(Fav=> this.Fav=Fav)
   
   
  }
  updateLaunchpadCart1(x){
    if(x.value > 0 && x.value < 100){
      this.LaunchpadAmount1 =  x.value;
      this.data.countg(this.amount+ parseInt(this.LaunchpadAmount1.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateLaunchpadFav1(x){
    if(x.value > 0 && x.value < 100){
      this.LaunchpadFav1 =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.LaunchpadFav1.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateLaunchpadCart2(x){
    if(x.value > 0 && x.value < 100){
      this.LaunchpadAmount2 =  x.value;
      this.data.countg(this.amount+ parseInt(this.LaunchpadAmount2.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateLaunchpadFav2(x){
    if(x.value > 0 && x.value < 100){
      this.LaunchpadFav2 =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.LaunchpadFav2.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateLaunchpadCart3(x){
    if(x.value > 0 && x.value < 100){
      this.LaunchpadAmount3 =  x.value;
      this.data.countg(this.amount+ parseInt(this.LaunchpadAmount3.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateLaunchpadFav3(x){
    if(x.value > 0 && x.value < 100){
      this.LaunchpadFav3 =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.LaunchpadFav3.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateLaunchpadCart4(x){
    if(x.value > 0 && x.value < 100){
      this.LaunchpadAmount4 =  x.value;
      this.data.countg(this.amount+ parseInt(this.LaunchpadAmount4.toString()));
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }
  updateLaunchpadFav4(x){
    if(x.value > 0 && x.value < 100){
      this.LaunchpadFav4 =  x.value;
      this.data.addFavorite(this.Fav+ parseInt(this.LaunchpadFav4.toString()));
      
  
     
      
      // this.guitar_price = this.guitarPrice*x.value+'$';
    }
  }

}
