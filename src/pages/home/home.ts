import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DateRange } from '../../app/models/DateRange';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  date = new Date();
  schedulePeriod : DateRange = new DateRange();
  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.schedulePeriod.startDate = moment();
    this.schedulePeriod.endDate = moment(this.schedulePeriod.startDate).add(14, 'days');

  }
}
