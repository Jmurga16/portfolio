import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsList = [
    {
      name: 'Proyecto 1',
      description: 'Descripción breve del proyecto 1',
      image: 'assets/images/proyecto1.jpg',
      githubLink: 'https://github.com/usuario/proyecto1',
      demoLink: 'https://proyecto1-demo.com'
    },
    {
      name: 'Proyecto 1',
      description: 'Descripción breve del proyecto 1',
      image: 'assets/images/proyecto1.jpg',
      githubLink: 'https://github.com/usuario/proyecto1',
      demoLink: 'https://proyecto1-demo.com'
    },
    {
      name: 'Proyecto 1',
      description: 'Descripción breve del proyecto 1',
      image: 'assets/images/proyecto1.jpg',
      githubLink: 'https://github.com/usuario/proyecto1',
      demoLink: 'https://proyecto1-demo.com'
    },
    // Agrega más proyectos aquí
  ];
}
