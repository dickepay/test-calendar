import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarDayComponent } from './calendar-day.component';

@NgModule({
  imports: [IonicPageModule.forChild(CalendarDayComponent)],
  exports: [CalendarDayComponent],
  declarations: [CalendarDayComponent],
  providers: [],
  entryComponents: [CalendarDayComponent]
})
export class CalendarDayModule { }
