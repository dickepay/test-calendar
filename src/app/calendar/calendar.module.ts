import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarComponent } from './calendar.component';
import { CalendarDayModule } from './calendar-day/calendar-day.module';
import { CalendarService } from './calendar.service';


@NgModule({
  imports: [IonicPageModule.forChild(CalendarComponent), CalendarDayModule],
  exports: [CalendarComponent],
  declarations: [CalendarComponent],
  providers: [CalendarService],
  entryComponents: [CalendarComponent]
})
export class CalendarModule { }
