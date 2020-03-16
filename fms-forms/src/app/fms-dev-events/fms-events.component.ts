import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fms-events',
  styleUrls: ['./fms-events.component.css'],
    templateUrl: './fms-events.component.html' ,

})
export class FmsEventsComponent implements OnInit {
  db: string;
  op: string;
  constructor() {
    this.db="uysdb";
    this.op="function(){}";
  }
  ngOnInit(): void {
  }
}
