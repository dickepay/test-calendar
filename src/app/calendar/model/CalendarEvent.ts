import { Moment } from 'moment';
import  moment from 'moment';

export class CalendarEvent  {
  constructor(){};
  public date: Moment;
  public event : CalendarEvent;

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
