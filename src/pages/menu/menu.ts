import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { NotificationPage } from '../notification/notification';
import { PhotoPage } from '../photo/photo';
import { AbsencePage } from '../absence/absence';
import { DgreePage } from '../dgree/dgree';
import { ActionPage } from '../action/action';
import { TablePage } from '../table/table';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { HomeworkPage } from "../homework/homework";





@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
homePage: Component;
   @ViewChild('content') childchildNavCtrl: NavController;


  constructor(public childNavCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

GoToTable(){
  this.childNavCtrl.push(TablePage);
}

GoToAction(){
  this.childNavCtrl.push(ActionPage);
}
GoToDgree(){
  this.childNavCtrl.push(DgreePage)
}
GoToAbsence(){
  this.childNavCtrl.push(AbsencePage);
}
GoToHomeWork(){
  this.childNavCtrl.push(HomeworkPage);
}
GoToPhoto(){
  this.childNavCtrl.push(PhotoPage);
}
GoToNotification(){
  this.childNavCtrl.push(NotificationPage);
}
GoToAbout(){
this.childNavCtrl.push(AboutPage);
}

}
