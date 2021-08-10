import { Component, Input, OnInit } from '@angular/core';
import { dataType } from '../data.model';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent implements OnInit {

  @Input() cards: Array<dataType>;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
