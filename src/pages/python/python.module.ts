import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PythonPage } from './python';

@NgModule({
  declarations: [
    PythonPage,
  ],
  imports: [
    IonicPageModule.forChild(PythonPage),
  ],
})
export class PythonPageModule {}
