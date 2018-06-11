import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { ParkData } from '../../providers/park-data';
import { ParkData} from '../../app/providers/park-data';
// import { ParkDetailsPage } from '../park-details/park-details';
import { Park } from '../../app/interfaces/park';



@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {
  parks: Array<Park> = []
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public parkData: ParkData) {
  parkData.getParks().then(theResult => {
  this.parks = theResult;
  })
  }
  goParkDetails(theParkData) {
    this.navCtrl.push("ParkDetailsPage", { parkData: theParkData });
  }

  getParks(event) {

    this.parkData.getParks().then(theResult => {
    this.parks = theResult;
    })
    
    let queryString = event.target.value;
    if (queryString !== undefined) {
    
    if (queryString.trim() == '') {
    return;
    }
    this.parkData.getFilteredParks(queryString).then(theResult => {
    this.parks = theResult;
    })
    }
   }

   resetList(event) {
    
    this.parkData.getParks().then(theResult => {
    this.parks = theResult;
    })
   }
   
   customHeaderFn(record, recordIndex, records) {
    if ( recordIndex > 0) {
    if ( record.name.charAt(0) !== records[recordIndex-1].name.charAt(0)) {
    return record.name.charAt(0);
    } else {
    return null;
    }
    } else {
    return record.name.charAt(0);
    }
   }
  
  
   
   
   
 }
 