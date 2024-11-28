import { Component, OnInit } from '@angular/core';
import { dates } from '../dates';

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.css']
})
export class MusiciansComponent implements OnInit {

  dates = dates;

  justPerformers = performersToDisplay;

  constructor() { }

  ngOnInit(): void {
  }

}

const performerString = Array.from(Object.values(dates), performerString => performerString.performers)


const newPerformerList: any[] = []

for (var val of performerString){
  var myArray: string[] = val.split(", ")
  for(var val1 of myArray){
    newPerformerList.push(val1)
  }
}

const performerListNoBlanks: string[] = newPerformerList.filter(function (e) {
  return e;
})

const removeDups = (performerListNoBlanks: string[]): string[] => {
  return performerListNoBlanks.filter((item,
      index) => performerListNoBlanks.indexOf(item) === index);
}

const performersToDisplay = removeDups(performerListNoBlanks)
