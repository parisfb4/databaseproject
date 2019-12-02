import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ContactsPage } from '../contacts/contacts';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  contacts = ContactsPage;
  username:string = '';
  password:string = '';
  repassword:string = '';
  idU = 0;
  answer:any = {} 

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  save(){
    console.log(this.username);
    console.log(this.password);
    console.log(this.repassword);
    if(this.username.length == 0 || this.password.length==0 || this.repassword.length==0)
    {
      alert("Pleas fill all fields");
    }else{
      const user = {
        username: this.username,
        password: this.password
      }
      this.http.post('/contacto/usuarios/', user).subscribe(data => {
        this.answer = data;
        this.idU = this.answer['id'];
        if(this.answer['ans'])
        {
          alert("User created correctly");
          this.navCtrl.push(this.contacts, {idUser: this.idU});
          
        }
      }, error => 
      {
        console.log(JSON.stringify(error));
      });
    }
  }

}
