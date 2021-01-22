import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyBirthPage } from './emergency-birth';

@NgModule({
  declarations: [
    EmergencyBirthPage,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyBirthPage),
  ],
})
export class EmergencyBirthPageModule {}
