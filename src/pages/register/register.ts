import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'
import {AngularFireAuth} from '@angular/fire/auth'
import {FeedBackPage} from '../../pages/feed-back/feed-back'
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerInfo={
    regname:'',
    regemail:'',
    regpass:''
    }

    getList=this.db.list('PersonaInfo')

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public db:AngularFireDatabase,public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(){
    let regName=document.getElementById('regemal') as HTMLInputElement;
    let regEmail=document.getElementById('regemal') as HTMLInputElement;
    let regPass=document.getElementById('regass')as HTMLInputElement;
  
    if(regName.value=="" &&regEmail.value==""&&regPass.value==""){

this.showAlert();

    }else{

          this.auth.auth.createUserWithEmailAndPassword(this.registerInfo.regemail,this.registerInfo.regpass).then(()=>{
      this.navCtrl.setRoot(FeedBackPage)
    }).catch(e=>{
     this.showAlert2()
    })

    this.getList.push(this.registerInfo);


    }


  }


  
showAlert() {
  const alert = this.alertCtrl.create({
    title: 'خطأ',
    subTitle: ' يرجى التأكد من معلومات كافة الحقول  ',
    buttons: ['OK']
  });
  alert.present();
}

showAlert2() {
  const alert = this.alertCtrl.create({
    title: 'خطأ',
    subTitle: ' يرجى التأكد من ان الايميل او الرقم السري صالحات ',
    buttons: ['OK']
  });
  alert.present();
}

}
