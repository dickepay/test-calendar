import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from '../model/CalendarDay';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'wf-calendar-day',
  templateUrl: 'calendar-day.component.html'
})

export class CalendarDayComponent implements OnInit {
  constructor() { }

  @Input() event;

  ngOnInit() {

  }
}
