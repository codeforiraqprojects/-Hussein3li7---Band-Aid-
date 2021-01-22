import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AchesPage } from './aches';

@NgModule({
  declarations: [
    AchesPage,
  ],
  imports: [
    IonicPageModule.forChild(AchesPage),
  ],
})
export class AchesPageModule {}
