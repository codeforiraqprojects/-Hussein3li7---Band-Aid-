import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the BurnsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.        tfaKyzTThOw
 */

@IonicPage()
@Component({
  selector: 'page-burns',
  templateUrl: 'burns.html',
})
export class BurnsPage {

  videos={

  video1: {
    url: 'https://www.youtube.com/embed/YL6tlZqReHA',
    title: 'الحروق'
  },

video2:{
  url: 'https://www.youtube.com/embed/tfaKyzTThOw',
  title: 'حروق الوجه'
}

}

trustedVideoUrl1:SafeResourceUrl
trustedVideoUrl2:SafeResourceUrl

  constructor(public navCtrl: NavController, public navParams: NavParams,public domSanitizer : DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurnsPage');
    
    this.trustedVideoUrl1 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos.video1.url);
    this.trustedVideoUrl2 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos.video2.url);

  }

}
