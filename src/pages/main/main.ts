import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TablePage } from '../table/table';
import { ActionPage } from '../action/action';
import { DgreePage } from '../dgree/dgree';
import { AbsencePage } from '../absence/absence';
import { HomeworkPage } from '../homework/homework';
import { PhotoPage } from '../photo/photo';
import { NotificationPage } from '../notification/notification';
import { AboutPage } from '../about/about';
import { CallNumber } from '@ionic-native/call-number';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, private callnumber: CallNumber, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

GoToTable(){
  this.navCtrl.push(TablePage);
}

GoToAction(){
  this.navCtrl.push(ActionPage);
}
GoToDgree(){
  this.navCtrl.push(DgreePage)
}
GoToAbsence(){
  this.navCtrl.push(AbsencePage);
}
GoToHomeWork(){
  this.navCtrl.push(HomeworkPage);
}
GoToPhoto(){
  this.navCtrl.push(PhotoPage);
}
GoToNotification(){
  this.navCtrl.push(NotificationPage);
}
GoToAbout(){
this.navCtrl.push(AboutPage);
}
async Call(){
await this.platform.ready();
try{
await this.callnumber.callNumber('08919898919', true);
console.log('open the dialer ...');

}
catch (e){
console.error(e || "some error happend");

}
}
}
