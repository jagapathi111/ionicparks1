
import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';



@Component({
  selector: 'page-review',
  templateUrl: 'review.html'
})
export class reviewPage {
  description: any;
  rate : any = 0;
  
  constructor( public navCtrl: NavController,
     public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  onModelChange(event)
  {
    this.rate = event;
    //console.log(event);
  }


  save(): void {
    let review = {
      
      description: this.description,
     
    };
    //this.viewCtrl.dismiss(review);
    

  }
  close(): void{
    this.viewCtrl.dismiss();
  }
}