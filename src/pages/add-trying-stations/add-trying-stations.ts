import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app' 
import { LoginPage } from '../../pages/login/login'
import { ApiServiseProvider } from '../../providers/api-servise/api-servise';
@IonicPage()
@Component({
  selector: 'page-add-trying-stations',
  templateUrl: 'add-trying-stations.html',
})
export class AddTryingStationsPage {
  StationsAddedByUser = this.db.list("StationsAddedByUser")

  getDataFromUser = {
    orginaztionsName: '',
    orginaztionsNumber: '',
    publisherName: ''
  }
  disableButton = false

  logedinFirebase: boolean;
  name: string;
  curentUser: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController, public auth: AngularFireAuth, public apiAuth:ApiServiseProvider ) {   

    if(apiAuth.AuthState==true){
      this.logedinFirebase=true;
    }else{
      this.logedinFirebase=false
      this.navCtrl.push(LoginPage)
    }


  //   this.name = navParams.get('data')
  // let checkFirease = firebase.auth().currentUser;

  // if (this.name == 'true') {
  //   this.logedinFirebase = true;
  // }
  // else if (checkFirease) {
  //   this.logedinFirebase = true;
  // }
  // else {
  //   this.logedinFirebase = false
  //   this.navCtrl.push(LoginPage)
  // }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTryingStationsPage');
  }

  SetNewState() {
    let orginaztionsName = document.getElementById('nameState') as HTMLInputElement;
    let orginaztionsNumber = document.getElementById('textFeed') as HTMLInputElement;

    this.getDataFromUser.orginaztionsName=orginaztionsName.value
    this.getDataFromUser.orginaztionsNumber=orginaztionsNumber.value

    this.getDataFromUser.publisherName = this.curentUser = this.auth.auth.currentUser.email
 
    if(orginaztionsNumber.value.length>=11 && orginaztionsNumber.value.length<=15){
 
    if (orginaztionsName.value.trim() !== "" && orginaztionsNumber.value.trim() !== "") {

      this.disableButton = true
      this.StationsAddedByUser.push(this.getDataFromUser).then(() => {

        this.showAlert()
        this.disableButton = false

      }
      ).catch(() => {
        this.showErrorAlert()
      })
    } else {
      this.showEmptyField()
    }
    }else{
      this.showSmallPhoneNumber()
    }


  }  

  goToLogin() {
    this.navCtrl.push(LoginPage)
  }

  showAlert() {
 
    if (this.auth.auth.currentUser != null) {
      this.curentUser = this.auth.auth.currentUser.email
      let NameOfcurentUser = this.curentUser.split("@");
      this.curentUser = NameOfcurentUser[0]
    }


    const alert = this.alertCtrl.create({
      title: 'شكرا لك ' + this.curentUser,
      subTitle: 'سوف تتم مراجعة الاضافة بعد 24 ساعة',
      buttons: ['OK'],
      cssClass: 'secondary'
    });
    alert.present();
  }
  showErrorAlert() {
    const alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'يرجى التأكد من اتصالك بالانترنت',
      buttons: ['OK']
    });
    alert.present();
  }


  showEmptyField() {
    const alert = this.alertCtrl.create({
      title: 'تنبيه',
      subTitle: 'يرجى عدم ترك الحقول فارغة ',
      buttons: ['ok']
    });
    alert.present();
  }
  showSmallPhoneNumber() {
    const alert = this.alertCtrl.create({
      title: 'تنبيه',
      subTitle: 'يجب انت يكون رقم الهاتف اكبر من 10 ارقام',
      buttons: ['ok']
    });
    alert.present();
  }



}
