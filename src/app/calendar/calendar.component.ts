import { Component, OnInit, Input } from '@angular/core';
import {CalendarService} from './calendar.service';
import {CalendarDay} from './model/CalendarDay';
import {CalendarEvent} from './model/CalendarEvent';
import {DateRange} from '.././models/DateRange';
import moment from 'moment';
import * as _ from 'underscore';

@Component({
  selector: 'wf-calendar',
  templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit {
  constructor(private calendarService : CalendarService) { }

  @Input() calendarEvents : Array<CalendarEvent>;
  @Input() calendarDate : Date;
  @Input() highlightedDateRange : DateRange;

  private calendarDays : Array<CalendarDay>;

  ngOnInit() {
    this.calendarDays = this.configureDays(this.calendarService.buildCalendar(this.calendarDate), this.calendarEvents, this.highlightedDateRange);
   }

   private configureDays(days : Array<CalendarDay>, events : Array<CalendarEvent>, dateRange : DateRange) {
     _.each(days, (day) => {
       day.event = _.find(events, (event) => {
         return event.date.isSame(day.date, 'day');
       });
        day.fallsInRange = day.date.isBetween(moment(dateRange.startDate).add(-1, 'days'), moment(dateRange.endDate).add(1, 'day'));
     });
     return this.buildCollectionStructure(days);
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
