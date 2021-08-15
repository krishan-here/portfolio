import { Component, OnInit } from '@angular/core';
import { faShare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  faShare = faShare;
  faEnvelope= faEnvelope;
  faLinkedinIn= faLinkedinIn;
  faWhatsapp= faWhatsapp;

  constructor() { }

  ngOnInit(): void {
  }

}
