import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

export function translateFactory(provider: TranslateService) {
  return () => provider.getData('/assets/i18n/')
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    ProjectsComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
