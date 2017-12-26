import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpedientFinderPage } from './expedient-finder';

@NgModule({
  declarations: [
    ExpedientFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpedientFinderPage),
  ],
})
export class ExpedientFinderPageModule {}
