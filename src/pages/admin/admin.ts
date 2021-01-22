import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ApiServiseProvider } from '../../providers/api-servise/api-servise'
import { Observable } from 'rxjs';
import { NewStateModel } from '../../Model/NewState'
import { Clipboard } from '@ionic-native/clipboard';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { UrlResolver } from '@angular/compiler';
@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  defulatView: string = "NewState"

  NewStateArray: Observable<NewStateModel[]>
  GetnewStateData: AngularFireObject<any>;
  GetnewStationsData: AngularFireObject<any>;
  NewStateFullData = []
  newStateSmallData = []
  NewStationsFullData = []
  newStationsSmallData = []


  conFiremdState = {
    StateName: '',
    ExplainState: '',
    symptoms: '',
    PulisherName: ''
  }
  conFiremdStations = {
    orginaztionsName: '',
    orginaztionsNumber: '',
    publisherName: ''
  }

  StateKey: string = ''
  StationsKey: string = ''

  NewStateNum = 0
  NewStationsNum = 0
  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiPro: ApiServiseProvider, public db: AngularFireDatabase, public loadingCtrl: LoadingController, public alertCtrl: AlertController, private clipboard: Clipboard) {

    this.getNewState()
    this.getNewStations()

  }

  ionViewDidLoad() {

  }


  ShowState(defulatView) {

    this.defulatView = defulatView
  }

  async getNewState() {

    this.presentLoading()

    this.GetnewStateData = this.db.object('newState');
    this.GetnewStateData.snapshotChanges().subscribe(action => {

      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data')
      } else {
        this.NewStateFullData.push(action.payload.val())
        this.newStateSmallData = Object.entries(this.NewStateFullData[0])
        this.NewStateNum = this.newStateSmallData.length
      }

    });

  }
  async getNewStations() {
    this.GetnewStationsData = this.db.object('StationsAddedByUser');
    this.GetnewStationsData.snapshotChanges().subscribe(action => {

      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data')
      } else {

        this.NewStationsFullData.push(action.payload.val())
        this.newStationsSmallData = Object.entries(this.NewStationsFullData[0])
        this.NewStationsNum = this.newStationsSmallData.length
      }

    });

  }


  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500,
    });
    loader.present();
  }

  showConfirmAddState(StateName: string, ExplainState: string, symptoms: string, PublisherName: string, key: string, index: number) {

    this.conFiremdState.StateName = StateName;
    this.conFiremdState.ExplainState = ExplainState;
    this.conFiremdState.PulisherName = PublisherName;
    this.conFiremdState.symptoms = symptoms
    this.StateKey = key


    const confirm = this.alertCtrl.create({
      title: StateName,
      message: ExplainState,
      buttons: [
        {
          text: 'حذف',
          handler: () => {
            this.RemoveStateAfterConfirmed()
            setTimeout(() => {

              this.newStateSmallData.splice(index, 1)
            }, 500)

          }
        },
        {
          text: 'اظافة',
          handler: () => {
            this.AddNewStateAfterConfiremd()

            setTimeout(() => {
              this.RemoveStateAfterConfirmed()
              setTimeout(() => {

                this.newStateSmallData.splice(index, 1)
              }, 500)
            }, 1000)

          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmAddStations(orginaztionsName: string, orginaztionsNumber: string, publisherName: string, key: string, state: number) {

    this.conFiremdStations.orginaztionsName = orginaztionsName
    this.conFiremdStations.orginaztionsNumber = orginaztionsNumber
    this.conFiremdStations.publisherName = publisherName
    this.StationsKey = key

    let index = this.newStationsSmallData.indexOf(state)

    const confirm = this.alertCtrl.create({
      title: orginaztionsName,
      message: orginaztionsNumber,
      buttons: [
        {
          text: 'حذف',
          handler: () => {
            this.RemoveStationsAfterConfirmed()
            setTimeout(() => {

              this.newStationsSmallData.splice(index, 1)
            }, 500)
          }
        },
        {
          text: 'اظافة',
          handler: () => {
            this.AddNewStationsAfterConfiremd()
            setTimeout(() => {
              this.RemoveStationsAfterConfirmed()
              setTimeout(() => {

                this.newStationsSmallData.splice(index, 1)
              }, 500)
            }, 1000)

          }
        }
      ]
    });
    confirm.present();
  }

  AddNewStateAfterConfiremd() {

    this.ApiPro.AddNewStateAfterConfiremd(this.conFiremdState.StateName, this.conFiremdState.ExplainState, this.conFiremdState.symptoms, this.conFiremdState.PulisherName)

  }

  RemoveStateAfterConfirmed() {
    this.ApiPro.RemoveStateAfterConfirmed(this.StateKey)

  }

  AddNewStationsAfterConfiremd() {

    this.ApiPro.AddNewStationsAfterConfiremd(this.conFiremdStations.orginaztionsName, this.conFiremdStations.orginaztionsNumber, this.conFiremdStations.publisherName)

  }

  RemoveStationsAfterConfirmed() {
    this.ApiPro.RemoveStationsAfterConfirmed(this.StationsKey)

  }


  CopyUrl() {

    let URL = document.getElementById('Url') as HTMLInputElement

    this.clipboard.copy(URL.innerText).then(()=>{
      this.ShowCopedURL()
    }).catch(err=>{
      alert(URL.innerText)
    })
  }

  ShowCopedURL(){
    const Coped = this.alertCtrl.create({
      title:'تم نسخ الرابط الى الحافظة',
      buttons:[{
        text:'Ok',
        handler:data=>{
          return
        }
      }]
    })
    Coped.present()
  }

}













