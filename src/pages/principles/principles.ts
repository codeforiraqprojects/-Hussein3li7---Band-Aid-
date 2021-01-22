import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{SafeResourceUrl,DomSanitizer} from '@angular/platform-browser'

/**
 * Generated class for the PrinciplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-principles',
  templateUrl: 'principles.html',
})
export class PrinciplesPage {

  video={
    url:'https://www.youtube.com/embed/K0hBTCb0l2M',
    title:'المبادئ'
  }

  safeResourceUrl:SafeResourceUrl

  constructor(public navCtrl: NavController, public navParams: NavParams,public domSanitizer:DomSanitizer) {


 
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad PrinciplesPage');
    
    this.safeResourceUrl=this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

  }

}
