import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directives',
  templateUrl: './ng-for-directives.component.html',
  styleUrls: ['./ng-for-directives.component.css']
})
export class NgForDirectivesComponent implements OnInit {
  cricketers = [
    { name: 'Saurav Ganguly', BattingStyle: 'Left Handed batsman',ODI:"21",Test:"17" },
    { name: 'Sachin Tendulkar', BattingStyle: 'Right Handed batsman',ODI:"49",Test:"51" },

    { name: 'Rahul Dravid', BattingStyle: 'Right Handed batsman',ODI:"12",Test:"34" },
    { name: 'Sehwag', BattingStyle: 'Right Handed batsman',ODI:"15",Test:"15" },

    { name: 'Kohali', BattingStyle: 'Right Handed batsman',ODI:"34",Test:"20" },
    { name: 'Rohit sharma', BattingStyle: 'Right Handed batsman',ODI:"21",Test:"17" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
