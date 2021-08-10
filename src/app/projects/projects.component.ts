import { Component, OnInit } from '@angular/core';
import { projects } from '../data';
import { dataType } from '../data.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectData: dataType[]=projects;
  showData: dataType[]=projects;
  constructor() { }


  assignMajor=()=>{
    this.showData=[];
    for(let item of this.projectData){
      if(item.projectType == 'major'){
        this.showData.push(item);
      }
    }

  }

  assignMinor =()=>{
    this.showData=[];
    for(let item of this.projectData){
      if(item.projectType == 'minor'){
        this.showData.push(item);
      }
    }

  }

  assignGame= ()=>{
    this.showData=[];
    for(let item of this.projectData){
      if(item.projectType == 'game'){
        this.showData.push(item);
      }
    }

  }

  ngOnInit(): void {
  }

}
