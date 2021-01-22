import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MajorAccidentsPage } from './major-accidents';

@NgModule({
  declarations: [
    MajorAccidentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MajorAccidentsPage),
  ],
})
export class MajorAccidentsPageModule {}
