import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AngularFireAuth } from '@angular/fire/auth';
import { ApiServiseProvider } from '../../providers/api-servise/api-servise';
import { MyApp } from '../../app/app.component'
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  FireBaseUser: string;
  FacebokUser: string;
  showFirebaseUser = false
  showFacebookUser = false

  EditeForm = false

  ConfirmedFullStationsArray = []
  ConfirmedSmallStationsArray = []

  Network = false

  constructor(public navCtrl: NavController, public callNumber: CallNumber, public auth: AngularFireAuth, public apiAuth: ApiServiseProvider, public db: AngularFireDatabase) {

    this.GetConfiremdStations()

    this.Network = true
    try {

      if (apiAuth.UserName != '') {
        this.FacebokUser = apiAuth.UserName
        this.showFacebookUser = true
      } else {
        this.showFacebookUser = true
      }
      //if (this.auth.auth.currentUser != null) {
      if (this.apiAuth.AuthState == true) {
          if (this.auth.auth.currentUser.email == 'h@h.com' || this.auth.auth.currentUser.email=='zainabimad71@gmail.com'||this.auth.auth.currentUser.email=='mayadahnaji@gmail.com'||this.auth.auth.currentUser.email=='hosainalandaleb@gmail.com') {
  
          MyApp.prototype.AuthState = true
        } else {

          MyApp.prototype.AuthState = false //////////////For Admin Panal
        }

        this.FireBaseUser = this.auth.auth.currentUser.email
        let NameOfcurentUser = this.FireBaseUser.split("@");
        this.FireBaseUser = NameOfcurentUser[0]
        this.showFirebaseUser = true
      } else {
        MyApp.prototype.AuthState = this.apiAuth.AuthState
        this.showFirebaseUser = false;
      }
    } catch (error) {
      console.log("No Internet")
    }

  }

  redcross1() {
    this.callNumber.callNumber("07706740075", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(ree => alert("حصل خطا اثناء الاتصال"))
  }
  redcross2() {
    this.callNumber.callNumber("07707789533", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(ree => alert("حصل خطا اثناء الاتصال"))

  }

  redcross3() {
    this.callNumber.callNumber("07815725184", true)
      .then(res => null)
      .catch(ree => alert("حصل خطا اثناء الاتصال"))

  }


  async GetConfiremdStations() {

    try {

      let GetConfirmedStations = this.db.object('ConfirmedStations')
      GetConfirmedStations.snapshotChanges().subscribe(data => {
        if (data.payload.val() != null || data.payload.val() != undefined) {
          this.ConfirmedFullStationsArray.push(data.payload.val())
          this.ConfirmedSmallStationsArray = Object.entries(this.ConfirmedFullStationsArray[0])
          this.Network = false
        } else {
          this.Network = false
        }
      })
    } catch (error) {
      console.log(error)

    }

  }

  Call(number: string) {
    this.callNumber.callNumber(number, true).then(res => {
      console.log("Call Done")
    }).catch(err => {
      alert("حصل خطأ اثناء الاتصال")
       
    })
  }




}
