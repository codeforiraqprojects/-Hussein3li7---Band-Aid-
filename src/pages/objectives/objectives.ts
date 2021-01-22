import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser'

/**
 * Generated class for the ObjectivesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-objectives',
  templateUrl: 'objectives.html',
})
export class ObjectivesPage {
  video={
    url:'https://www.youtube.com/embed/Ws77icZwaSk',
    title:'الاهداف'
  }

  safeResourceUrl:SafeResourceUrl


  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer:DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjectivesPage');

        
    this.safeResourceUrl=this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);


  }

  

}
