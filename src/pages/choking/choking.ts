import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ChokingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choking',
  templateUrl: 'choking.html',
})
export class ChokingPage {

  video: any = {
    url: 'https://www.youtube.com/embed/n8yXguceS9g',
    title: 'الشرق'
};

trustedVideoUrl: SafeResourceUrl;
noInternet:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private domSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChokingPage');
 



   
try {
   this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

} catch (error) {
  alert("No Internet Connection");
}
   


  }

}
