import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
import { DocumentFinderPage } from '../pages/document-finder/document-finder';
import { TransferTaskPage } from '../pages/transfer-task/transfer-task';
import { NewEntryPage } from '../pages/new-entry/new-entry';
import { ReceptionPage } from '../pages/reception/reception';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TasksPage,
    DocumentFinderPage,
    TransferTaskPage,
    NewEntryPage,
    ReceptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TasksPage,
    DocumentFinderPage,
    TransferTaskPage,
    NewEntryPage,
    ReceptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
