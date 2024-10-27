import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad Nacional Mayor de San Marcos (UNMSM)',
      description: 'Facultad de Ingeniería de Sistemas e Informática (FISI)',
      period: '2015 - 2021',
      logo: "assets/images/unmsm.png"
    }
  ];
}
