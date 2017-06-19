import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { MainPage } from '../pages/main/main';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TablePage } from '../pages/table/table';
import { ActionPage } from '../pages/action/action';
import { DgreePage } from '../pages/dgree/dgree';
import { AbsencePage } from '../pages/absence/absence';
import { HomeworkPage } from '../pages/homework/homework';
import { PhotoPage } from '../pages/photo/photo';
import { NotificationPage } from '../pages/notification/notification';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    MainPage,
    TablePage,
    ActionPage,
    DgreePage,
    AbsencePage,
    HomeworkPage,
    PhotoPage,
    NotificationPage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    MainPage,
    TablePage,
    ActionPage,
    DgreePage,
    AbsencePage,
    HomeworkPage,
    PhotoPage,
    NotificationPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber
  ]
})
export class AppModule {}
