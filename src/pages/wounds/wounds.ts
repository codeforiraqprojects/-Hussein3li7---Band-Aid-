import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the WoundsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wounds',
  templateUrl: 'wounds.html',
})
export class WoundsPage {

  videos:any ={

    video1: {
      url: 'https://www.youtube.com/embed/8Bv08Oj0bPo',
      title: 'النزف من الانف'
  },
  video2: {
    url: 'https://www.youtube.com/embed/FZYLrlVsZoA',
    title: 'النزف من الايد'
},


 }
 trustedVideoUrl:SafeResourceUrl
 trustedVideoUrl2:SafeResourceUrl

  constructor(public navCtrl: NavController, public navParams: NavParams,public domSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WoundsPage');
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos.video1.url);
    this.trustedVideoUrl2 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos.video2.url);

  }

}
