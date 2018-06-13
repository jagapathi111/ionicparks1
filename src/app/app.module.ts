import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { Ionic2RatingModule } from 'ionic2-rating';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParkListPage } from '../pages/park-list/park-list';
import { ParkMapPage } from '../pages/park-map/park-map';
import { TabsPage } from '../pages/tabs/tabs';
import { reviewPage } from '../pages/review/review'
//import { revi } from '../providers/review/review';

 //import { ParkDetailsPage } from '../pages/park-details/park-details'; 

@NgModule({
  declarations: [
    MyApp,
    ParkListPage,
    ParkMapPage,
    TabsPage,
    reviewPage,
  
    //ParkDetailsPage
  ],
  imports: [
    BrowserModule,
    Ionic2RatingModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ParkListPage,
    ParkMapPage,
    TabsPage,
    reviewPage,
    // ParkDetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
   // ReviewProvider
  ]
})
export class AppModule { }
