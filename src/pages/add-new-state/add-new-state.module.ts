import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewStatePage } from './add-new-state';

@NgModule({
  declarations: [
    AddNewStatePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewStatePage),
  ],
})
export class AddNewStatePageModule {}
