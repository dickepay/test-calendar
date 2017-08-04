import { Moment } from 'moment';
import  moment from 'moment';
import { CalendarEvent } from './CalendarEvent';

export class CalendarDay  {
  constructor(){};
  public date: Moment;
  public event : CalendarEvent;
  public isInMonth : boolean;

  public isToday(){
    return moment().diff(moment(this.date), 'days');
  }

  public dayValue(){
    return moment(this.date).format('D');
  }

  public hasEvent() {
    return this.event != null;
  }
}
