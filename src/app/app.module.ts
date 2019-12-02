import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { ContactsPage } from '../pages/contacts/contacts';
import { RegisterPage } from '../pages/register/register';
import { AddPage } from '../pages/add/add';
import { EditPage } from '../pages/edit/edit';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmPage } from '../pages/confirm/confirm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    ContactsPage,
    RegisterPage,
    AddPage,
    EditPage,
    ConfirmPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    ContactsPage,
    RegisterPage,
    AddPage,
    EditPage,
    ConfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
