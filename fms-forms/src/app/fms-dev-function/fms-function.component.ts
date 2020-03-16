import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fms-function',
  templateUrl: './fms-function.component.html',
  styleUrls: ['./fms-function.component.css']
})
export class FmsFunctionComponent implements OnInit {

  @Input('card-header') cardHeader: string;

  $code: string;
  val1: string;
  val2: string = 'Option 2';


  constructor() {
    this.$code="function(){}";
  }
  ngOnInit(): void {
  }
}
