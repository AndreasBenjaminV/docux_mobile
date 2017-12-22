import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentFinderPage } from './document-finder';

@NgModule({
  declarations: [
    DocumentFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentFinderPage),
  ],
})
export class DocumentFinderPageModule {}
