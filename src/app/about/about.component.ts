import { Component, OnInit } from '@angular/core';
import { profiles, skills } from '../data';
import { dataType } from '../data.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  heading="About me";
  showEducation = true;

  dataProfiles:dataType[]= profiles;
  dataSkills: dataType[]= skills;

  dataShow:dataType[];
  assignProfile=()=>{
    this.dataShow=this.dataProfiles;
    this.showEducation=false;
  }

  assignSkill =()=>{
    this.dataShow=this.dataSkills;
    this.showEducation=false;
    console.log(this.dataSkills);
    
  }
  showEdu=()=>{
    this.showEducation=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
