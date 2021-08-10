import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() caller: () => void;
  @Input() title: string;

  genericCaller(){
    this.caller();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
