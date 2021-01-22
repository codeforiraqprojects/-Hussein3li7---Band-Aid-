import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController, NavController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { StatePage } from '../state/state'

@IonicPage()
@Component({
  selector: 'page-edit-form',
  templateUrl: 'edit-form.html',
})
export class EditFormPage {

  getDataFromUser = {
    StateName: '',
    ExplainState: '',
    symptoms: '',
    PulisherName: ''
  }
  disableButton = false

  logedinFirebase: boolean;
  name: string;
  curentUser: any

  StateDataObj = {
    Title: '',
    ExplainState: '',
    symptoms: '',

  }
  key: ''

  constructor(public navParams: NavParams, private ViewCtr: ViewController, public alertContrl: AlertController, public db: AngularFireDatabase, private navCtrl: NavController) {

    this.GetDataFromStatePage()

  }

  GetDataFromStatePage() {
    const ArrayGotData = this.navParams.get('Data')
    this.getDataFromUser.StateName = ArrayGotData['StateName']
    this.getDataFromUser.ExplainState = ArrayGotData['ExplainState']
    this.getDataFromUser.symptoms = ArrayGotData['symptoms']
    this.getDataFromUser.PulisherName = ArrayGotData['PulisherName']
    this.key = ArrayGotData['key']

  }

  CloseModal() {
    const data = {
      re: 'true'
    }
    this.ViewCtr.dismiss(data)
  }
  SaveUpdateinfo() {

    try {

      let DataObj = this.db.list('ConfirmedState')

      DataObj.set(this.key, this.getDataFromUser).then(() => {
        this.DoneUpdate()

      }
      ).catch(err => console.log(err, 'You do not have access!'));

    } catch (error) {
      console.log(this.key + this.getDataFromUser)
    }

  }

  DoneUpdate() {
    const alert = this.alertContrl.create({
      title: 'تم',
      subTitle: 'تم التحديث بنجاح',
      buttons: [{
        text: 'Ok',
        handler: data => {
         this.navCtrl.popAll() 
          // this.CloseModal()
        }
      }]
    });
    alert.present();
  }


}
