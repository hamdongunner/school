import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
  }
  GoToAbout(){
    this.navCtrl.push(AboutPage);
  }

}
