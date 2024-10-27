import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  skillsList = [
    { name: 'Angular', logo: 'assets/images/skills/angular.svg' },
    { name: 'JavaScript', logo: 'assets/images/skills/javascript.svg' },
    { name: 'HTML', logo: 'assets/images/skills/html5.svg' },
    { name: 'CSS', logo: 'assets/images/skills/css.svg' },
    { name: 'Node.js', logo: 'assets/images/skills/nodejs.svg' },
    { name: 'Bootstrap', logo: 'assets/images/skills/bootstrap.svg' }
    // Añade más habilidades según sea necesario
  ];
}
