import { Component, } from '@angular/core';
import { NavController, ModalController, NavParams, Modal } from 'ionic-angular';
import { BrokenPage } from '../broken/broken';
import { FaintingPage } from '../fainting/fainting';
import { BurnsPage } from '../burns/burns'
import { SunstrokePage } from '../sunstroke/sunstroke';
import { ChokingPage } from '../choking/choking';
import { BloodCirculationPage } from '../blood-circulation/blood-circulation';
import { UnconsciousnessPage } from '../unconsciousness/unconsciousness';
import { MusculoskeletalInjuriesPage } from '../musculoskeletal-injuries/musculoskeletal-injuries';
import { MaxTemperaturesPage } from '../max-temperatures/max-temperatures';
import { AchesPage } from '../aches/aches';
import { MajorAccidentsPage } from '../major-accidents/major-accidents';
import { EmergencyBirthPage } from '../emergency-birth/emergency-birth';
import { WoundsPage } from '../wounds/wounds';
import { PythonPage } from '../python/python';
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'page-state',
  templateUrl: 'state.html',
})
export class StatePage {

  searchQuery: string = '';
  items: string[];
  items2: string[];
  val: any
  val2: any

  Network = false

  ConfrimedStateFullData = []
  ConfrimedStateSmallData = []

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public auth: AngularFireAuth, private Modal: ModalController, private parames: NavParams) {


    this.initializeItems();
    this.Network = true

    this.GetConfirmedData()

    // if(parames.get('refresh')==true){


    // }else{

    //   this.navCtrl.setRoot(this.navCtrl.getActive().component);
    // }


  }


  initializeItems() {
    this.items = [
      'الكسر',
      'ضربة شمس',
      'الاغماء',
      'الجروح والنزف',
      'الحروق',
      'الاختناق',
      'اظطرابات الدورة الدموية',
      'التسمم',
      'اصابات العضلات والمفاصل',
      'تاثير درجات الحرارة القصوى',
      'الاوجاع',
      'الولادة الطارئة',
      'الافاعي والعقارب'

    ];

    this.items2 = [
      '0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
    ]

  }
 
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    this.val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (this.val && this.val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
      })
    }

  }

  goToDatails(getitems) {

    switch(getitems){
      case 0:
        this.navCtrl.push(BrokenPage)
        break;
     
      case 1: 
        this.navCtrl.push(SunstrokePage)
        break;
    
      case 2: 
        this.navCtrl.push(FaintingPage)
        break;
    
      case 3: 
        this.navCtrl.push(WoundsPage)
        break;
      case 3: 
        this.navCtrl.push(WoundsPage)
        break;
      case 4: 
      this.navCtrl.push(BurnsPage)
        break;
      case 5: 
      this.navCtrl.push(ChokingPage)
        break;
      case 6: 
      this.navCtrl.push(BloodCirculationPage)
        break;
      case 7: 
      this.navCtrl.push(UnconsciousnessPage)
        break;
      case 8: 
      this.navCtrl.push(MusculoskeletalInjuriesPage)
        break;
      case 9: 
      this.navCtrl.push(MaxTemperaturesPage)
        break;
      case 10: 
      this.navCtrl.push(AchesPage)
        break;
      case 11: 
      this.navCtrl.push(EmergencyBirthPage)
        break;
      case 12: 
      this.navCtrl.push(PythonPage)
        break;
 
     default:
       alert(getitems)
    }

    // if (getitems == '0') {

    //   this.navCtrl.push(BrokenPage)

    // }
    // else if (getitems == '1') {

    //   this.navCtrl.push(SunstrokePage)
    // }
    // else if (getitems == '2') {

    //   this.navCtrl.push(FaintingPage)
    // }
    // else if (getitems == '3') {

    //   this.navCtrl.push(WoundsPage)
    // }
    // else if (getitems == '4') {
    //   this.navCtrl.push(BurnsPage)
    // }
    // else if (getitems == '5') {
    //   this.navCtrl.push(ChokingPage)
    // }
    // else if (getitems == '6') {
    //   this.navCtrl.push(BloodCirculationPage)
    // }
    // else if (getitems == '7') {
    //   this.navCtrl.push(UnconsciousnessPage)
    // }

    // else if (getitems == '8') {
    //   this.navCtrl.push(MusculoskeletalInjuriesPage)
    // }
    // else if (getitems == '9') {
    //   this.navCtrl.push(MaxTemperaturesPage)
    // }

    // else if (getitems == '10') {
    //   this.navCtrl.push(AchesPage)
    // }

    // else if (getitems == '11') {
    //   this.navCtrl.push(EmergencyBirthPage)
    // }
    // else if (getitems == '12') {
    //   this.navCtrl.push(PythonPage)
    // }

  }


  async  GetConfirmedData() {

    try {

      let ConfirmedData = this.db.object('ConfirmedState')
      ConfirmedData.snapshotChanges().subscribe(data => {
        if (data.payload.val() != null || data.payload.val() != undefined) {
          this.ConfrimedStateFullData.push(data.payload.val())
          this.ConfrimedStateSmallData = Object.entries(this.ConfrimedStateFullData[0])

          this.Network = false
        } else {
          this.Network = false
        }
      })

    } catch (error) {

    }

  }

  openModal(StateName: String, ExplainState: string, symptoms: string, PulisherName: string, key: string) {

    const myModalData = {
      StateName: StateName,
      ExplainState: ExplainState,
      symptoms: symptoms,
      PulisherName: PulisherName,
      key: key
    }

    const myModal: Modal = this.Modal.create('ModalPage', { Data: myModalData })

    myModal.present()

    myModal.onDidDismiss((data) => {

      try {
        if (data['re'] == 'true') {
          this.Update()
        } else {
          return
        }
      } catch (err) {
        this.Update()
      }

    })
  }

  Update() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);

  }

}

