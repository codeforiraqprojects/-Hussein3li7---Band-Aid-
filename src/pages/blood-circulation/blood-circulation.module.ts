import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloodCirculationPage } from './blood-circulation';

@NgModule({
  declarations: [
    BloodCirculationPage,
  ],
  imports: [
    IonicPageModule.forChild(BloodCirculationPage),
  ],
})
export class BloodCirculationPageModule {}
