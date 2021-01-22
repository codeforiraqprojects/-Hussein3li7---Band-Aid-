import { Component, style, trigger, transition, animate } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
  
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  open=true;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }


  ionViewDidLoad() {

    this.team()

  }

 
  team(){
  

    let bgcolor=document.getElementsByClassName('contant') as HTMLCollectionOf<HTMLElement>
    bgcolor[0].style.backgroundColor="#2699fb"

 let borAbout=document.getElementsByClassName('about') as HTMLCollectionOf<HTMLElement>
 borAbout[0].style.borderBottomLeftRadius="100px"

    let hidedate=document.getElementsByClassName('conn-btn-details') as HTMLCollectionOf<HTMLElement>
    hidedate[0].style.backgroundColor="#2699fb"
    
    
     let hideAbout=document.getElementsByClassName('conn-about-mob') as  HTMLCollectionOf<HTMLElement>
      hideAbout[0].style.display='none'
 
      let hideTeam=document.getElementsByClassName('conn-personal-info') as  HTMLCollectionOf<HTMLElement>
     hideTeam[0].style.display='block' 
      
  }

about(){
  let bgcolor=document.getElementsByClassName('contant') as HTMLCollectionOf<HTMLElement>
  bgcolor[0].style.backgroundColor="#f5f5f5"

    let hideTeam=document.getElementsByClassName('conn-personal-info') as  HTMLCollectionOf<HTMLElement>
   hideTeam[0].style.display='none' 

    let hideAbout=document.getElementsByClassName('conn-about-mob') as  HTMLCollectionOf<HTMLElement>
    hideAbout[0].style.display='block' 
    hideAbout[0].style.backgroundColor="#f5f5f5"

    let borAbout=document.getElementsByClassName('team') as HTMLCollectionOf<HTMLElement>
    borAbout[0].style.borderBottomRightRadius="100px" 

  let hide_date=document.getElementsByClassName('conn-btn-details') as HTMLCollectionOf<HTMLElement>
    hide_date[0].style.backgroundColor="#f5f5f5"


}


}

