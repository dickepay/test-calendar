import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import  moment from 'moment';
import {CalendarDay} from './model/CalendarDay';

@Injectable()
export class CalendarService {
  constructor() { }

  public buildCalendar(date) {

    if(!date) {
      date = moment();
    }
    let calendars = [];
    let start = moment(date).startOf('month').startOf('week');
    let end = moment(date).endOf('month').endOf('week');

    let num = end.diff(start, 'days');
    for(let i = 0; i <= num; i++) {
      var day : CalendarDay = new CalendarDay();
      day.date = moment(start).add(i, "days");

      day.isInMonth = moment(date).get('month') === day.date.get('month') ? true : false;
      calendars.push(day);
    }
    return this.buildCollectionStructure(calendars);
  }

  private buildCollectionStructure(days){
    let calendars = [];
    let index = 0;
    for (let i = 0; i < (days.length / 7); i++) {
      calendars.push(days.slice(index, index + 7));
      index += 7;
    }
    return(calendars);
  }
}
