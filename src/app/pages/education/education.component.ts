import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  //encapsulation: ViewEncapsulation.None 
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad Nacional Mayor de San Marcos (UNMSM)',
      description: 'Facultad de Ingeniería de Sistemas e Informática (FISI)',
      period: '2015 - 2021',
      logo: "assets/images/unmsm.png"
    }
  ];

  logoUrl = "assets/images/unmsm.png"

}
