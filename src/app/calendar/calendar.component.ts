import { Component, OnInit } from '@angular/core';
import { dates } from '../dates';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  dates = dates;
  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  };

  constructor() { }

  ngOnInit(): void {
  }

}
