import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SunstrokePage } from './sunstroke';

@NgModule({
  declarations: [
    SunstrokePage,
  ],
  imports: [
    IonicPageModule.forChild(SunstrokePage),
  ],
})
export class SunstrokePageModule {}
