import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { RegisterPage } from '../register/register'
import { AngularFireAuth } from '@angular/fire/auth'
import { FeedBackPage } from '../feed-back/feed-back';
import * as firebase from 'firebase/app'
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { ApiServiseProvider } from '../../providers/api-servise/api-servise' 
import {MyApp} from '../../app/app.component'
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  private getInfoUser = this.db.list('LoginData')
  private getFacebookUserData = this.db.list('getFacebookUserData')



  loginInfo = {
    Email: '',
    Pass: ''
  }

  facebookinfo = {
    name: '',
    email: '',


  }

  DisableLogin=false

  public loginFacebook = false;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public auth: AngularFireAuth, public db: AngularFireDatabase, private fb: Facebook, private spinnerDialog: SpinnerDialog, public apiAuth: ApiServiseProvider ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedBackPage');

  }

  gotoRegister() {

    this.navCtrl.push(RegisterPage)

  }

  login() {

    let chemail = document.getElementById('email') as HTMLInputElement;
    let chpass = document.getElementById('pass') as HTMLInputElement;

    if (chemail.value == "" && chpass.value == "") {
      this.showAlert();
    }
    else { 
      this.DisableLogin=true
      this.auth.auth.signInWithEmailAndPassword(this.loginInfo.Email, this.loginInfo.Pass).then(() => {
        this.apiAuth.AuthState = true 
        this.spinnerDialog.hide();
        this.navCtrl.setRoot(HomePage)

      }).catch(() => {
        this.checkAvalidEmailAndPass();
      })
    }
    this.DisableLogin=false
  }

  LoginWIthFacebook() {

    this.fb.login(['email'])
      .then((res: FacebookLoginResponse) => {
    
        this.fb.api("/me?fields=name,email", []).then(user => {
          this.facebookinfo.name = user.name;
          this.facebookinfo.email = user.email;
          this.getFacebookUserData.push(this.facebookinfo)
        }) 
        this.apiAuth.AuthState = true
        this.navCtrl.setRoot(FeedBackPage, {
          data: "true"
        })
      }).catch(e => alert(e));

    this.apiAuth.UserName = this.facebookinfo.name;

  }



  // loginWithGoogle(){

  //   this.googlePlus.login({})
  //   .then(res =>alert(res)
  //   )
  //   .catch(err =>this.showAlert2() );

  // // try{
  // //     this.auth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider()).then(ref =>{
  // //     console.log(ref)
  // //     this.navCtrl.setRoot(HomePage)
  // //   })
  // // }catch(err){
  // //   console.log(err)
  // // }


  // }




  resetPass() {
    this.showPromptRestPassword()
  }



  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'يرجى التأكد من الايميل وكلمة المرور',
      buttons: ['OK']
    });
    alert.present();
    this.DisableLogin=false
  }


  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'يرجى التأكد من اتصالك بالانترنت',
      buttons: ['OK']
    });
    alert.present();
    this.DisableLogin=false
  }

  checkAvalidEmailAndPass() {
    const alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'كلمة المرور او الرقم السري خطأ',
      buttons: ['OK']
    });
    alert.present();
    this.DisableLogin=false
  }



  showPromptRestPassword() {
    const prompt = this.alertCtrl.create({
      title: 'نسيت كلمة السر!',
      message: "ادخل الايميل رجاً لاستعادة كلمة السر",
      inputs: [
        {
          name: 'Email',
          placeholder: 'الايميل'
        },
      ],
      buttons: [
        {
          text: 'رجوع',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ارسال',
          handler: data => {
            console.log(data);
            this.auth.auth.sendPasswordResetEmail(data.Email).then(sent => {
              this.CheckEmailtoresetPass();
            }).catch(() => {
              this.checkErrorEmail();
            })
          }
        }
      ]
    });
    prompt.present();
  }

  checkErrorEmail() {
    const alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'يرجى التأكد من الايميل',
      buttons: ['OK']
    });
    alert.present();
    this.DisableLogin=false
  }

  CheckEmailtoresetPass() {
    const alert = this.alertCtrl.create({
      title: 'شكراً لك',
      subTitle: 'تم ارسال رمز تعيين كلمة المرور الى الايميل',
      buttons: ['OK']
    });
    alert.present();
    this.DisableLogin=false
  }


}

