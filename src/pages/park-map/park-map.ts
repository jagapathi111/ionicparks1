
//parkmap
import { Component } from '@angular/core';
import {Platform, NavController } from 'ionic-angular';
//import { ParkData } from '../../providers/park-data';
import { ParkData } from '../../app/providers/park-data';
import { Park } from '../../app/interfaces/park';
import { CustomMapMarker } from './custom-marker';

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

  constructor(public nav:NavController, public platform: Platform, public parkData: ParkData) {
  this.map = null;
}
   ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.initializeMap();
     
  });

}
initializeMap() {
  //let image = 'assets/img/nps_arrowhead.png';
  let minZoomLevel = 3;
  this.map = new google.maps.Map(document.getElementById('map_canvas'), {
  zoom: minZoomLevel,
  center: new google.maps.LatLng(39.833, -98.583),
  mapTypeControl: false,
  streetViewControl: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  });
 }
}