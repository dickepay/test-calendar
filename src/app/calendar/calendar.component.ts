import { Component, OnInit, Input } from '@angular/core';
import {CalendarService} from './calendar.service';
import {CalendarDay} from './model/CalendarDay';

@Component({
  selector: 'wf-calendar',
  templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit {
  constructor(private calendarService : CalendarService) { }

  @Input() calendarEvents;
  @Input() calendarDate;

  private calendarDays : Array<CalendarDay>;

  ngOnInit() {
    this.calendarDays = this.calendarService.buildCalendar(this.calendarDate);
   }
}
