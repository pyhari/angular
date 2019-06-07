import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-overview',
  templateUrl: './input-overview.component.html',
  styleUrls: ['./input-overview.component.css']
})
export class InputOverviewComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit() {
  }

}
