import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HttpClient } from '@angular/common/http';
import { ContactsPage } from '../contacts/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  register = RegisterPage;
  contacts = ContactsPage;
  dataUser :any = [];
  username:string = '';
  password:string = '';
  user:any = {};
  ban:boolean = false;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    
  }
  ionViewWillEnter()
  {
    
    this.http.get('/contacto/usuarios/').subscribe(data => {
      this.dataUser = data;
      //console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error));
    });
  }
  login(){
    if(this.username == '' || this.password == '')
    {
      alert("Please fill all the fields.");
    }else
    {
      for (let index = 0; index < this.dataUser.length; index++) {
        this.user = this.dataUser[index];
        if (this.user['username'] == this.username && this.user['password'] == this.password.toString()) {
          this.navCtrl.push(this.contacts, {idUser: this.user['id']});
          this.ban = true;
        }
      }
      if (!this.ban) {
        alert("Username/Password incorrect");
      }
    }
  }
  goRegister()
  {
    this.navCtrl.push(this.register);
  }
}
