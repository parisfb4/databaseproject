import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  idUser = 0;
  nameCont:string = "";
  numberCont:string = "";
  emailCont:string = "";
  faceCont:string = "";
  instaCont:string = "";
  twitCont:string = "";
  imgCont:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.idUser = navParams.get('idU');
    console.log(this.idUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  addCont()
  {
    if(this.nameCont.length == 0 || this.numberCont.length == 0)
    {
      alert("Please fill at least name and number.")
    }
    else{
      if(this.imgCont.length == 0)
      {
        this.imgCont = "/assets/imgs/mainicon.png";
      }
      const con =
      {
        id_user: this.idUser,
        name: this.nameCont,
        number: this.numberCont,
        email: this.emailCont,
        facebook: this.faceCont,
        instagram: this.instaCont,
        twitter: this.twitCont,
        img: this.imgCont
      }
      this.http.post("/contacto/contactos/", con).subscribe(data => {
        console.log(JSON.stringify(data));
        this.navCtrl.pop();
      }, error => {
        console.log(JSON.stringify(error));
      });
    }
    
  }
}
