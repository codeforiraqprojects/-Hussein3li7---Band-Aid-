import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrinciplesPage } from './principles';

@NgModule({
  declarations: [
    PrinciplesPage,
  ],
  imports: [
    IonicPageModule.forChild(PrinciplesPage),
  ],
})
export class PrinciplesPageModule {}
