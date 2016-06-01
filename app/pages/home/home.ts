//import {Page, NavController} from 'ionic-angular';
import {Page, NavController, Alert, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {MapleRestData} from '../../providers/maple-rest-data/maple-rest-data';
import {Http, Headers, RequestOptions} from 'angular2/http';
//import {MAPLECONF} from '../../providers/maple-rest-data/maple-config';

import {ProjectDetailPage} from '../project-detail/project-detail';
import {MapleFooter} from '../maple-footer/maple-footer';
import {mcHousePopup} from '../mc-component/mc-house-popup';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [MapleFooter]
})
export class HomePage implements OnInit {
  private nav;
  private parms = {};
  projects: Object;

  static get parameters() {
    return [[NavController], [NavParams], [MapleRestData]];
  }

  constructor(nav, navParams, private mapleRestData: MapleRestData) {
    this.nav = nav;

  }

  projectSwiperOptions = {
    loop: true,
    //pager: true,
    speed: 4000,
    autoplay: 300
  };


  ngOnInit() {
    this.getProjects('index.php?r=ngget/getProjects');
  }

  getProjects(url) {
    this.mapleRestData.load(url, this.parms).subscribe(
      data => { this.projects = data; console.log(this.projects); }
    );

  }
  goToProject(id) {
    this.nav.push(ProjectDetailPage, id);
  }
  mcPopup() {
    let alert = Alert.create({
      title: 'Confirm purchase',
      message: `Do you want to buy this book? <img src="/img/maple/c1.jpg"/>
      <p>dfdsfasfas<p>
       <p>dfdsfasfas<p>
       <img src="/img/maple/c1.jpg"/>
       <img src="/img/maple/c1.jpg"/>
       <img src="/img/maple/c1.jpg"/>
          <p>dfdsfasfas<p>
          <ion name="home"></icon>
      `,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    this.nav.present(alert);
  }

}