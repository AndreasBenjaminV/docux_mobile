import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the ReceptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const HEROES = [
  {id: 1, date:'1/2/2017', autor:'Superman'},
  {id: 2, date:'2/3/2017', autor:'Batman'},
  {id: 3, date:'3/4/2017', autor:'BatGirl' },
  {id: 4, date:'4/5/2017', autor:'Robin' },
  {id: 5, date:'5/6/2017', autor:'Flash'},
];  

@IonicPage()
@Component({
  selector: 'page-reception',
  templateUrl: 'reception.html',
})
export class ReceptionPage {
  data: object;
  name: string;
  heroes=HEROES;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

}
