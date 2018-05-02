import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html',
})
export class WatchPage {

watchNext: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  saveMovie()
  {
    this.storage.set("watchNext", this.watchNext);
    this.navCtrl.pop();
  
  }

  ionViewDidLoad()
  {
   console.log('ionViewDidLoad WatchPage');
  }//ionViewDidLoad

  ionViewWillEnter()
  {
      this.storage.get("watchNext").then((data)=>{this.watchNext=data})
      .catch((err)=>{alert("Error Accessing Storage")});
  }//ionViewWillEnter

}
