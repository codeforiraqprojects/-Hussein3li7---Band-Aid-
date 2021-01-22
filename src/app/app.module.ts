import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatePage } from '../pages/state/state';
import { ObjectivesPage } from '../pages/objectives/objectives';
import { PrinciplesPage } from '../pages/principles/principles';
import { AboutPage } from '../pages/about/about'
import { BrokenPage } from '../pages/broken/broken'
import { FaintingPage } from '../pages/fainting/fainting'
import { BurnsPage } from '../pages/burns/burns'
import { SunstrokePage } from '../pages/sunstroke/sunstroke'
import { ChokingPage } from '../pages/choking/choking'
import { BloodCirculationPage } from '../pages/blood-circulation/blood-circulation'
import { UnconsciousnessPage } from '../pages/unconsciousness/unconsciousness';
import { AdminPage } from '../pages/admin/admin'
import { AddNewStatePage } from '../pages/add-new-state/add-new-state';
import { AddTryingStationsPage } from '../pages/add-trying-stations/add-trying-stations';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Clipboard } from '@ionic-native/clipboard';

import { SpinnerDialog } from '@ionic-native/spinner-dialog';

import { MusculoskeletalInjuriesPage } from '../pages/musculoskeletal-injuries/musculoskeletal-injuries';
import { MaxTemperaturesPage } from '../pages/max-temperatures/max-temperatures';

import { AchesPage } from '../pages/aches/aches';
import { MajorAccidentsPage } from '../pages/major-accidents/major-accidents';

import { PythonPage } from '../pages/python/python'
import { RegisterPage } from '../pages/register/register'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { EmergencyBirthPage } from '../pages/emergency-birth/emergency-birth';
import { WoundsPage } from '../pages/wounds/wounds';
import { FeedBackPage } from '../pages/feed-back/feed-back'
import { LoginPage } from '../pages/login/login'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth'

import { ApiServiseProvider } from '../providers/api-servise/api-servise';

export const firebaseConfig = {
  apiKey: "AIzaSyD7_PjUsYf5-URS5KSwkQPGRZGSFRAgj0Q",
  authDomain: "first-3id-7.firebaseapp.com",
  databaseURL: "https://first-3id-7.firebaseio.com",
  projectId: "first-3id-7",
  storageBucket: "",
  messagingSenderId: "234231719187"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StatePage,
    PrinciplesPage,
    ObjectivesPage,
    AboutPage,
    BrokenPage,
    FaintingPage,
    BurnsPage,
    SunstrokePage,
    ChokingPage,
    BloodCirculationPage,
    UnconsciousnessPage,
    FeedBackPage,
    MusculoskeletalInjuriesPage,
    MaxTemperaturesPage,
    LoginPage,
    AchesPage,
    MajorAccidentsPage,
    RegisterPage,
    EmergencyBirthPage,
    WoundsPage,
    PythonPage,
    AddNewStatePage,
    AddTryingStationsPage,
    AdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StatePage,
    PrinciplesPage,
    ObjectivesPage,
    AboutPage,
    BrokenPage,
    FaintingPage,
    BurnsPage,
    SunstrokePage,
    ChokingPage,
    BloodCirculationPage,
    MaxTemperaturesPage,
    EmergencyBirthPage,
    UnconsciousnessPage,
    MusculoskeletalInjuriesPage,
    FeedBackPage,
    AchesPage,
    MajorAccidentsPage,
    LoginPage,
    WoundsPage,
    PythonPage,
    RegisterPage,
    AddNewStatePage,
    AddTryingStationsPage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiServiseProvider,
    CallNumber,
    Facebook,
    GooglePlus,
    SpinnerDialog,
    Clipboard

  ]
})
export class AppModule { }
