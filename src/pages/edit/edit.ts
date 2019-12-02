import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  contact: any = {}
  id = 0;
  idUser = 0;
  nameCont:string = "";
  numberCont:string = "";
  emailCont:string = "";
  faceCont:string = "";
  instaCont:string = "";
  twitCont:string = "";
  imgCont:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.contact = this.navParams.get('contact');
    this.id = this.contact.id;
    this.idUser = this.contact.id_user;
    this.nameCont = this.contact.name;
    this.numberCont = this.contact.number;
    this.emailCont = this.contact.email;
    this.faceCont = this.contact.facebook;
    this.instaCont = this.contact.instagram;
    this.twitCont = this.contact.twitter;
    this.imgCont = this.contact.img;
  }

  ionViewDidEnter() {
    //console.log('ionViewDidLoad EditPage');
  }

  editCont()
  {
    this.contact.id_user = this.idUser;
    this.contact.name = this.nameCont
    this.contact.number = this.numberCont;
    this.contact.email = this.emailCont;
    this.contact.facebook = this.faceCont;
    this.contact.instagram = this.instaCont;
    this.contact.twitter = this.twitCont;
    this.contact.img = this.imgCont;
    this.http.post('/contacto/contactosupd/', this.contact).subscribe(data =>
      {
        console.log(JSON.stringify(data));
        alert("Updated");
        this.navCtrl.pop();
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

}
