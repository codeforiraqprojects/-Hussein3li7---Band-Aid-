
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'

import { NewStateModel, NewStationsModel } from '../../Model/NewState'
import { Observable } from 'rxjs';

@Injectable()
export class ApiServiseProvider {

  AuthState = false
  AdminLogin = false
  UserName: string
  private AddConfirmedState = this.db.list('ConfirmedState')
  private AddConfirmedStations = this.db.list('ConfirmedStations')
  private RemoveConfirmedState = this.db.list('newState')
  private RemoveConfirmedStations = this.db.list('StationsAddedByUser')


  conFiremdState = {
    StateName: '',
    ExplainState: '',
    symptoms:'',
    PulisherName: ''
  }
  conFiremdStations = {
    orginaztionsName:'',
    orginaztionsNumber:'',
    publisherName:''
  }


  info: Observable<any[]>
  private NewStateRef = this.db.list<NewStateModel>('newState')
  private NewStationsRef = this.db.list<NewStationsModel>('StationsAddedByUser')

  constructor(public Auth: AngularFireAuth, public db: AngularFireDatabase) {
    console.log('Hello ApiServiseProvider Provider');
  }



  getNewState() {
    return this.NewStateRef;

  }

  showNewState() {
    return this.info
  }

  getNewStations() {
    return this.NewStationsRef;
  }



  AddNewStateAfterConfiremd(StateName: string, ExplainState: string,symptoms:string, PublisherName: string) {

    this.conFiremdState.StateName = StateName
    this.conFiremdState.ExplainState = ExplainState,
      this.conFiremdState.PulisherName = PublisherName
this.conFiremdState.symptoms=symptoms
    return this.AddConfirmedState.push(this.conFiremdState)

  }


  RemoveStateAfterConfirmed(key: string) {
    return this.RemoveConfirmedState.remove(key)
  }


  AddNewStationsAfterConfiremd(orginaztionsName: string, orginaztionsNumber: string, publisherName: string) {

    this.conFiremdStations.orginaztionsName = orginaztionsName
    this.conFiremdStations.orginaztionsNumber= orginaztionsNumber,
    this.conFiremdStations.publisherName = publisherName

    return this.AddConfirmedStations.push(this.conFiremdStations)

  }


  RemoveStationsAfterConfirmed(key: string) {
    return this.RemoveConfirmedStations.remove(key)
  }


}
