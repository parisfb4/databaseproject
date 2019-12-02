

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contact: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contact = this.navParams.get('con');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AddPage');
  }
  ionViewWillEnter()
  {
    //console.log(JSON.stringify(this.contact));
  }
}