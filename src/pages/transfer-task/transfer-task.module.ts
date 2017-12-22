import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferTaskPage } from './transfer-task';

@NgModule({
  declarations: [
    TransferTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferTaskPage),
  ],
})
export class TransferTaskPageModule {}
