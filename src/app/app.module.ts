import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
<<<<<<< HEAD
import { DocumentFinderPage } from '../pages/document-finder/document-finder';
import { TransferTaskPage } from '../pages/transfer-task/transfer-task';
import { NewEntryPage } from '../pages/new-entry/new-entry';
import { ReceptionPage } from '../pages/reception/reception';
=======
import { TaskListProvider } from '../providers/task-list/task-list';
>>>>>>> 83dcbbfccec33a52a3289d71844542f61a65d8c3

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    TasksPage,
    DocumentFinderPage,
    TransferTaskPage,
    NewEntryPage,
    ReceptionPage
=======
    TasksPage
>>>>>>> 83dcbbfccec33a52a3289d71844542f61a65d8c3
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
<<<<<<< HEAD
    TasksPage,
    DocumentFinderPage,
    TransferTaskPage,
    NewEntryPage,
    ReceptionPage
=======
    TasksPage
>>>>>>> 83dcbbfccec33a52a3289d71844542f61a65d8c3
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
=======
    TaskListProvider
>>>>>>> 83dcbbfccec33a52a3289d71844542f61a65d8c3
  ]
})
export class AppModule {}
