import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaintingPage } from './fainting';

@NgModule({
  declarations: [
    FaintingPage,
  ],
  imports: [
    IonicPageModule.forChild(FaintingPage),
  ],
})
export class FaintingPageModule {}
