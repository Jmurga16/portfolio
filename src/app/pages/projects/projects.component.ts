import { Component } from '@angular/core';
import { IProjectList } from '../../models/interfaces/project-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsList: IProjectList[] = [
    {
      "name": "projects.name.16",
      "description": "projects.description.16",
      "image": "assets/images/projects/erp-logistics.png",
      "githubLink": "",
      "demoLink": "https://erp-logistics-front-dev.azurewebsites.net/"
    },
    {
      "name": "projects.name.13",
      "description": "projects.description.13",
      "image": "assets/images/projects/gestion-expedientes.png",
      "githubLink": "",
      "demoLink": "https://gestor-expedientesv1.azurewebsites.net/"
    },
    {
      "name": "projects.name.15",
      "description": "projects.description.15",
      "image": "assets/images/projects/densys.png",
      "githubLink": "",
      "demoLink": ""
    },
    {
      "name": "projects.name.1",
      "description": "projects.description.1",
      "image": "assets/images/projects/crmlegal-small.png",
      "githubLink": "",
      "demoLink": "https://crm-legal.azurewebsites.net/"
    },
    {
      "name": "projects.name.2",
      "description": "projects.description.2",
      "image": "assets/images/projects/sisgapo.png",
      "githubLink": "",
      "demoLink": ""
    },
    {
      "name": "projects.name.3",
      "description": "projects.description.3",
      "image": "assets/images/projects/lucky.png",
      "githubLink": "",
      "demoLink": "https://www.grupolucky.com/"
    },
    {
      "name": "projects.name.4",
      "description": "projects.description.4",
      "image": "assets/images/projects/inventario-small.png",
      "githubLink": "https://github.com/Jmurga16/Inventario.Front",
      "demoLink": ""
    },
    {
      "name": "projects.name.5",
      "description": "projects.description.5",
      "image": "assets/images/projects/libros-asignaturas-small.png",
      "githubLink": "https://github.com/Jmurga16/Libros-Asignaturas",
      "demoLink": ""
    },
    {
      "name": "projects.name.6",
      "description": "projects.description.6",
      "image": "assets/images/projects/alumnos-notas-small.png",
      "githubLink": "https://github.com/Jmurga16/GestorAlumnos.Front",
      "demoLink": ""
    },
    {
      "name": "projects.name.7",
      "description": "projects.description.7",
      "image": "assets/images/projects/masuno-small.png",
      "githubLink": "",
      "demoLink": ""
    },
    {
      "name": "projects.name.8",
      "description": "projects.description.8",
      "image": "assets/images/projects/gestor-codigos-small.png",
      "githubLink": "https://github.com/Jmurga16/GeneradorCodigos.Front",
      "demoLink": ""
    },
    {
      "name": "projects.name.9",
      "description": "projects.description.9",
      "image": "assets/images/projects/parafinanciera.PNG",
      "githubLink": "https://github.com/Jmurga16",
      "demoLink": ""
    },
    {
      "name": "projects.name.10",
      "description": "projects.description.10",
      "image": "assets/images/projects/aquafiltek-small.png",
      "githubLink": "",
      "demoLink": ""
    },
    /* {
      "name": "projects.name.11",
      "description": "projects.description.11",
      "image": "assets/images/projects/referencial.png",
      "githubLink": "https://github.com/Jmurga16",
      "demoLink": ""
    }, */
    {
      "name": "projects.name.12",
      "description": "projects.description.12",
      "image": "assets/images/projects/colaborador.png",
      "githubLink": "",
      "demoLink": ""
    },
    {
      "name": "projects.name.14",
      "description": "projects.description.14",
      "image": "assets/images/projects/restaurant-mvp.png",
      "githubLink": "",
      "demoLink": ""
    },

  ]

}
