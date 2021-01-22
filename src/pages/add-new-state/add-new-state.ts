import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database'
import { LoginPage } from '../../pages/login/login'
import { AngularFireAuth } from '@angular/fire/auth'
import { ApiServiseProvider } from '../../providers/api-servise/api-servise';
@IonicPage()
@Component({
  selector: 'page-add-new-state',
  templateUrl: 'add-new-state.html',
})
export class AddNewStatePage {

  fireList = this.db.list("newState")

  getDataFromUser = {
    stateName: '',
    explainState: '',
    symptoms: '',
    publisherName: '',
    Url: ''
  }
  disableButton = false

  logedinFirebase: boolean;
  name: string;
  curentUser: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController, public auth: AngularFireAuth, public apiAuth: ApiServiseProvider) {


    if (apiAuth.AuthState == true) {
      this.logedinFirebase = true;
    } else {
      this.logedinFirebase = false
      this.navCtrl.push(LoginPage)
    }


  }

  SetNewState() {
    let nameState = document.getElementById('nameState') as HTMLInputElement;
    let textFeed = document.getElementById('textFeed') as HTMLInputElement;
    let textSymptoms = document.getElementById('textSymptoms') as HTMLInputElement;
    let URL = document.getElementById('URL') as HTMLInputElement;

    console.log(this.getDataFromUser)

    this.getDataFromUser.publisherName = this.curentUser = this.auth.auth.currentUser.email

    if (nameState.value.trim() !== "" && textFeed.value.trim() !== "" && textSymptoms.value.trim() !== '' && URL.value.trim() !== '') {

      this.disableButton = true
      this.fireList.push(this.getDataFromUser).then(() => {

        this.showAlert()
        this.disableButton = false

      }
      ).catch(() => {
        this.showErrorAlert()
      })
    } else {
      this.showEmptyField()
    }

  }

  clear() {

    let textErea = document.getElementById('textFeed') as HTMLInputElement

    textErea.value = ""

  }

  clearsymptoms() {

    let textSymptoms = document.getElementById('textSymptoms') as HTMLInputElement;

    textSymptoms.value = ""

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
      subTitle: 'يرجى عدم ترك الحقول فارغة',
      buttons: ['ok']
    });
    alert.present();
  }

}
