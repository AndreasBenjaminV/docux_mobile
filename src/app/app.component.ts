import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
import { DocumentFinderPage } from '../pages/document-finder/document-finder';
import { NewEntryPage } from '../pages/new-entry/new-entry';
import { ReceptionPage } from '../pages/reception/reception';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
          { title: 'Bandeja de entrada', component: HomePage },
          { title: 'Detalle de tareas', component: TasksPage },
          { title: 'Recepcion', component: ReceptionPage },
          { title: 'Nuevo Ingreso', component: NewEntryPage },
          { title: 'Reportes', component: HomePage },
          { title: 'Buscador de expedientes', component: HomePage },
          { title: 'Buscador de documentos', component: DocumentFinderPage }
        ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

