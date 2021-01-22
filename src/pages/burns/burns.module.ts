import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BurnsPage } from './burns';

@NgModule({
  declarations: [
    BurnsPage,
  ],
  imports: [
    IonicPageModule.forChild(BurnsPage),
  ],
})
export class BurnsPageModule {}
