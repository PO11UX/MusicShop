import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class DataService {

    fullAmount1 = new BehaviorSubject<number>(0);
    fullAmount2 = this.fullAmount1.asObservable();
    favorite1 = new BehaviorSubject<number>(0);
    favorite2=  this.favorite1.asObservable();
  
  
    constructor() { }
  
    countg(amount: number) {
      this.fullAmount1.next(amount);
    }

    addFavorite(Fav:number){
      this.favorite1.next(Fav);
    }
    
  
  }