import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from '../model/CalendarDay';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'wf-calendar-day',
  templateUrl: 'calendar-day.component.html',
  styles:[
    '.shade{background-color:lightGray}'
  ]
})

export class CalendarDayComponent implements OnInit {
  constructor(public popCtrl : PopoverController) { }

  @Input() event;

  ngOnInit() {

  }
}
