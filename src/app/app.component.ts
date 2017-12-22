import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
<<<<<<< HEAD
import { DocumentFinderPage } from '../pages/document-finder/document-finder';
import { NewEntryPage } from '../pages/new-entry/new-entry';
import { ReceptionPage } from '../pages/reception/reception';
=======
>>>>>>> 83dcbbfccec33a52a3289d71844542f61a65d8c3

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
<<<<<<< HEAD
          { title: 'Bandeja de entrada', component: HomePage },
          { title: 'Detalle de tareas', component: TasksPage },
          { title: 'Recepcion', component: ReceptionPage },
          { title: 'Nuevo Ingreso', component: NewEntryPage },
          { title: 'Reportes', component: HomePage },
          { title: 'Buscador de expedientes', component: HomePage },
          { title: 'Buscador de documentos', component: DocumentFinderPage }
=======
          { title: 'Detalle de tareas', component: HomePage }, //solucionar error
          { title: 'Bandeja de entrada', component: HomePage },
          { title: 'Detalle de tareas', component: TasksPage },
          { title: 'Recepcion', component: HomePage },
          { title: 'Nuevo Ingreso', component: HomePage },
          { title: 'Reportes', component: HomePage },
          { title: 'Buscador de expedientes', component: HomePage },
          { title: 'Buscador de documentos', component: HomePage }
>>>>>>> 83dcbbfccec33a52a3289d71844542f61a65d8c3
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

