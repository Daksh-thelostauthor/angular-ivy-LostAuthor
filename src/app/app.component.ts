import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggle = true;
  names;
  public holiday = [
    {
      holiday_name: 'Alex',
      Status: 'OKay',
      Number_Of_Days: '4',
    },
    {
      holiday_name: 'Clair',
      Status: 'OKay',
      Number_Of_Days: '4',
    },
    {
      holiday_name: 'Zendaya',
      Status: 'OKay',
      Number_Of_Days: '4',
    },
    {
      holiday_name: 'Jessie Pinkman',
      Status: 'OKay',
      Number_Of_Days: '4',
    },
  ];

  holidaySelected(holidayObj) {
    console.log(holidayObj);
    this.names = holidayObj.holiday_name;
    this.toggle = !this.toggle;
  }
}
