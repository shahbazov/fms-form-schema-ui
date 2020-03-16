import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fms-def-action',
  templateUrl: './fms-def-action.component.html',
  styleUrls: ['./fms-def-action.component.css']
})
export class FmsDefActionComponent implements OnInit {

  val1: string;
  val2: string = 'Option 2';

  create: string;
  delete: string;
  download: string;
  read: string;
  save: string;
  upload: string;

  constructor() {
    this.create="true";
    this.delete="true";
    this.download="true";
    this.read="true";
    this.save="true";
    this.upload="true";
  }

  ngOnInit(): void {
  }

}
