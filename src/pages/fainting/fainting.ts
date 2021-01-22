import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the FaintingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fainting',
  templateUrl: 'fainting.html',
})
export class FaintingPage {
  video: any = {
    url: 'https://www.youtube.com/embed/nD6fpWL_-Q4',
    title: 'الاغماء'
};
trustedVideoUrl:SafeResourceUrl


  constructor(public navCtrl: NavController, public navParams: NavParams,public domSanitizer:DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaintingPage');
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

  }

}



