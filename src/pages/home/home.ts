import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { MoviePage } from '../../pages/movie/movie';
import { WatchPage } from '../../pages/watch/watch';
import { Storage} from '@ionic/storage';
import { TicketPage } from '../../pages/ticket/ticket';

//the above imports are needed to implement the methods below that open other pages and
//the storage method too

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl:NavController, public NavParams: NavParams, private storage: Storage, private storageTicket: Storage) {}//constructor

watchNext: string;

name: string;
movieName: string;
password: number;

 openMovies()
 {
    this.navCtrl.push(MoviePage);//pushes the movie page to the top of the stack
 }//openMovies

 openWatch()
 {
    this.navCtrl.push(WatchPage);//pushes the watch page to the top of the stack
 }//openWatch

 openTicket()
 {
    this.navCtrl.push(TicketPage);
 }//openTicket

//used for the watch page
   ionViewWillEnter()
  {
      this.storage.get("watchNext").then((data)=>{this.watchNext=data})//asigns the variable storage to whatever is chosen for the value watchNext
      .catch((err)=>{alert("Error Accessing Storage")});//                then saves the data on this page aswell as the watch.ts page
  }//ionViewWillEnter   

//used for the ticket page
    ionViewWillEnterTicket() 
  {
      this.storageTicket.get("name").then((data1)=>{this.name=data1})
      .catch((err)=>{alert("Error Accessing Storage")});
       this.storageTicket.get("movieName").then((data2)=>{this.movieName=data2})
      .catch((err)=>{alert("Error Accessing Storage")});
       this.storageTicket.get("creditCard").then((data3)=>{this.password=data3})
      .catch((err)=>{alert("Error Accessing Storage")});
  }    
  
}//HomePage
