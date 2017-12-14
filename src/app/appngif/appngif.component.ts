import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appngif',
  templateUrl: './appngif.component.html',
  styleUrls: ['./appngif.component.css']
})
export class AppngifComponent implements OnInit {
  showdiv=false;
 sampletext="This is the sample text";
  togglevisibilty():void
  {
    this.showdiv=!this.showdiv;
  }

  constructor() { }

  ngOnInit() {
  }

}
