import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

//font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ContentHeadComponent } from './content-head/content-head.component';
import { EducationComponent } from './education/education.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContainComponent } from './contain/contain.component';
import { ProjectTypePipe } from './project-type.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    SocialMediaComponent,
    ContentHeadComponent,
    EducationComponent,
    CardComponent,
    ButtonComponent,
    ProjectsComponent,
    ContainComponent,
    ProjectTypePipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
