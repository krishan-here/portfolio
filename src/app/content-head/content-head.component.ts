import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-head',
  templateUrl: './content-head.component.html',
  styleUrls: ['./content-head.component.css']
})
export class ContentHeadComponent implements OnInit {

  @Input() header: string;
  constructor() { }

  ngOnInit(): void {
  }

}
