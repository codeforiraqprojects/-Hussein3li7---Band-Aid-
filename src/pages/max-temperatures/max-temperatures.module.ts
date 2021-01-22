import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaxTemperaturesPage } from './max-temperatures';

@NgModule({
  declarations: [
    MaxTemperaturesPage,
  ],
  imports: [
    IonicPageModule.forChild(MaxTemperaturesPage),
  ],
})
export class MaxTemperaturesPageModule {}
