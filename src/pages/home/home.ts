import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { MoviePage } from '../../pages/movie/movie';
import { WatchPage } from '../../pages/watch/watch';
import { Storage} from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl:NavController, public NavParams: NavParams, private storage: Storage) {}//constructor

watchNext: string;

 openMovies()
 {
    this.navCtrl.push(MoviePage);
 }//openMovies

 openWatch()
 {
    this.navCtrl.push(WatchPage);
 }//openWatch

   ionViewWillEnter()
  {
      this.storage.get("watchNext").then((data)=>{this.watchNext=data})
      .catch((err)=>{alert("Error Accessing Storage")});
  }//ionViewWillEnter

}//HomePage
