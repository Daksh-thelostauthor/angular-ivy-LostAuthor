import { getLocaleCurrencySymbol } from '@angular/common';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggle = true;
  public names;
  public days;
  public holiday = [
    {
      holiday_name: 'Alex',
      Status: 'OKay',
      Number_Of_Days: '454',
    },
    {
      holiday_name: 'Clair',
      Status: 'OKay',
      Number_Of_Days: '45',
    },
    {
      holiday_name: 'Zendaya',
      Status: 'OKay',
      Number_Of_Days: '44',
    },
    {
      holiday_name: 'Jessie Pinkman',
      Status: 'OKay',
      Number_Of_Days: '77',
    },
  ];

  holidaySelected(holidayObj) {
    this.names = holidayObj.holiday_name;
    this.days = holidayObj.Number_Of_Days;
    this.toggle = !this.toggle;
  }

  Clickit(i) {
    console.log(i);
  }
}
