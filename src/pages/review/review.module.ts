import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { reviewPage } from './review';

@NgModule({
  declarations: [
    reviewPage,
  ],
  imports: [
    IonicPageModule.forChild(reviewPage),
  ],
})
export class reviewPageModule {}
