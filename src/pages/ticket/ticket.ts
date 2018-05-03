import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {

//variables needed for saving data
name: string;
movieName: string;
password: number;

  constructor(private navCtrl: NavController, private storageTicket: Storage) {
  }

//saves three variables
  saveTicket()
  {
    this.storageTicket.set("name", this.name);//sets the value of storgae var to that or the name var
    this.storageTicket.set("movieName", this.movieName);
    this.storageTicket.set("password", this.password);
    this.navCtrl.pop();// than pops this page off the stack
  }

  ionViewWillEnterTicket() 
  {
      this.storageTicket.get("name").then((data1)=>{this.name=data1})
      .catch((err)=>{alert("Error Accessing Storage")});
       this.storageTicket.get("movieName").then((data2)=>{this.movieName=data2})
      .catch((err)=>{alert("Error Accessing Storage")});
       this.storageTicket.get("password").then((data3)=>{this.password=data3})
      .catch((err)=>{alert("Error Accessing Storage")});
  }

}
