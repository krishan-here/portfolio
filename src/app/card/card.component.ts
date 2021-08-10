import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { dataType } from '../data.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: dataType={
    type:'',
    imageSrc: '',
    head: '',
    content:''
  };
  faGithub= faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
