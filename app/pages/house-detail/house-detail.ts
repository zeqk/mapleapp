import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the HouseDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/house-detail/house-detail.html',
})
export class HouseDetailPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(private nav: NavController) {
    //this.nav = nav;
  }
}
