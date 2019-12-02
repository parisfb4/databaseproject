import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddPage } from '../add/add';
import { ContactPage } from '../contact/contact';
import { RegisterPage } from '../register/register';
import { ConfirmPage } from '../confirm/confirm';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  numViews = 0;
  idUser = 0;
  confirm = ConfirmPage;
  shContact = ContactPage;
  contacts :any = [];
  cont : any = {};
  addContact = AddPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.idUser = navParams.get('idUser');
  }
  ionViewWillLeave() {
  }
  ionViewDidLoad() {

  }
  ionViewDidEnter() {
  }
  ionViewWillEnter()
  {
    const jsuser = {
      idU:this.idUser
    }
    this.http.post('/contacto/contactoshw/', jsuser).subscribe(data => {
      this.contacts = data;
      //console.log(JSON.stringify(data[0]));
    }, error => {
      console.log(JSON.stringify(error))
    });
  }
  ionViewWillUnload()
  {
    this.navCtrl.popToRoot();
  }
  clickAdd()
  {
    this.navCtrl.push(this.addContact, {idU:this.idUser});
  }
  showContact(contact:any)
  {
    this.cont = contact;
    //console.log(JSON.stringify(this.cont));
    this.navCtrl.push(this.shContact, {con:this.cont});
  }
  editCont(con:any)
  {

  }
  deleteCont(idCon)
  {
    this.http.post('/contacto/contactosdel/', {id:idCon}).subscribe(data => {
      console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error))
    });
    this.navCtrl.push(this.confirm);
  }

}
