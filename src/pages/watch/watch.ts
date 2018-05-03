import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//Storage import is needed for this page and the home page

@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html',
})
export class WatchPage {

watchNext: string;//varaible for saving data

  constructor(private navCtrl: NavController, private storage: Storage) {
  }

  saveMovie()
  {
    this.storage.set("watchNext", this.watchNext);//sets the value of storgae var to that or th watchNext var 
    this.navCtrl.pop();// than pops it onto the stack
  }

  ionViewDidLoad()
  {
   console.log('ionViewDidLoad WatchPage');//pops up a message is the console
  }//ionViewDidLoad

//this is the same function declared in the home page
  ionViewWillEnter()
  {
      this.storage.get("watchNext").then((data)=>{this.watchNext=data})
      .catch((err)=>{alert("Error Accessing Storage")});
  }//ionViewWillEnter

}
