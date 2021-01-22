import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{StatePage} from '../state/state' ;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
 


  go(){
    this.navCtrl.push(StatePage);
  }

}
