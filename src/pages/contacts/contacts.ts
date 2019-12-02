import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddPage } from '../add/add';
import { ContactPage } from '../contact/contact';
import { RegisterPage } from '../register/register';
import { ConfirmPage } from '../confirm/confirm';
import { EditPage } from '../edit/edit';

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
  edit = EditPage;
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
    this.idUser = this.navParams.get('idUser');
    this.contacts = [];
    const jsuser = {
      id_user:this.idUser
    }
    this.http.post('/contacto/contactoshw/', jsuser).subscribe(data => {
      this.contacts = data;
      //console.log(JSON.stringify(data[0]));
    }, error => {
      console.log(JSON.stringify(error))
    });
  }
  ionViewWillEnter()
  {
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
    this.navCtrl.push(this.edit, {contact:con});
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
