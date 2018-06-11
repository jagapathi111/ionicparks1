
//parkmap
import { Component } from '@angular/core';
import {Platform, NavController, NavParams} from 'ionic-angular';
//import { ParkData } from '../../providers/park-data';
import { ParkData} from '../../app/providers/park-data';
import { Park} from '../../app/interfaces/park';
import { CustomMapMarker } from './custom-marker';
import { ParkDetailsPage } from '../park-details/park-details';
//import { parkMarker} from './custom-marker';
//import { parkListpage} from './park-list.ts'

/*
  Generated class for the ParkMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-park-map',
  templateUrl: 'park-map.html'
})
export class ParkMapPage {
  parks: Array<Park> = [];
  map: google.maps.Map;

  constructor(public navctrl: NavController, public platform: Platform, public parkData: ParkData) {
  this.map = null;
}
   ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.initializeMap();
     });
    }
  
  
  

initializeMap() {
  
  let minZoomLevel = 3;
  this.map = new google.maps.Map(document.getElementById('map_canvas'), {
  zoom: minZoomLevel,
  center: new google.maps.LatLng(39.833, -98.583),
  mapTypeControl: false,
  streetViewControl: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  
    });
  


let image = 'assets/img/nps_arrowhead.png';

this.parkData.getParks().then(theResult => {
  this.parks = theResult;

  for (let thePark of this.parks) {
  let parkPos:google.maps.LatLng =new google.maps.LatLng (thePark.lat, thePark.long);
  let parkMarker:google.maps.Marker = new CustomMapMarker(thePark);
  parkMarker.setPosition(parkPos);
  parkMarker.setMap( this.map);
  parkMarker.setIcon(image);
 // }
//})
 google.maps.event.addListener(parkMarker, 'click', () => {
  let selectedMarker:any = parkMarker;
 
  this.navctrl.push ("ParkDetailsPage", {parkData: selectedMarker.parkData});
  //});

//}
//}

});
}
})
}
}
