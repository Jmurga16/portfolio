import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProjectList } from '../../models/interfaces/project-list';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  showAllSystems = false;

  constructor(private modalService: NgbModal) {}

  openModal(project: IProjectList): void {
    const ref = this.modalService.open(ProjectModalComponent, { size: 'lg', centered: true });
    ref.componentInstance.project = project;
  }

  systemsList: IProjectList[] = [
    {
      "name": "projects.name.16",
      "description": "projects.description.16",
      "longDescription": "projects.systems.detail.16",
      "image": "assets/images/projects/erp-logistics.png",
      "tags": ["Angular", "Java", "MySQL"],
      "githubLink": "",
      "demoLink": "https://erp-logistics-front-dev.azurewebsites.net/"
    },
    {
      "name": "projects.name.13",
      "description": "projects.description.13",
      "longDescription": "projects.systems.detail.13",
      "image": "assets/images/projects/gestion-expedientes.png",
      "tags": ["Angular", "Java", "MongoDB"],
      "githubLink": "",
      "demoLink": "https://gestor-expedientesv1.azurewebsites.net/"
    },
    {
      "name": "projects.name.15",
      "description": "projects.description.15",
      "longDescription": "projects.systems.detail.15",
      "image": "assets/images/projects/densys.png",
      "tags": ["React", "Java", "PostgreSQL"],
      "githubLink": "",
      "demoLink": ""
    },
    {
      "name": "projects.name.1",
      "description": "projects.description.1",
      "longDescription": "projects.systems.detail.1",
      "image": "assets/images/projects/crmlegal.png",
      "tags": ["Angular", ".NET", "SQL Server"],
      "githubLink": "",
      "demoLink": "https://crm-legal.azurewebsites.net/"
    },
    {
      "name": "projects.name.2",
      "description": "projects.description.2",
      "longDescription": "projects.systems.detail.2",
      "image": "assets/images/projects/sisgapo.png",
      "tags": ["Angular", ".NET", "SQL Server"],
      "githubLink": "",
      "demoLink": ""
    },
    {
      "name": "projects.name.3",
      "description": "projects.description.3",
      "longDescription": "projects.systems.detail.3",
      "image": "assets/images/projects/lucky.png",
      "tags": ["Angular", ".NET", "SQL Server"],
      "githubLink": "",
      "demoLink": "https://www.grupolucky.com/"
    },
    {
      "name": "projects.name.10",
      "description": "projects.description.10",
      "longDescription": "projects.systems.detail.10",
      "image": "assets/images/projects/aquafiltek-small.png",
      "tags": ["PHP", "JavaScript", "MySQL"],
      "githubLink": "",
      "demoLink": ""
    },
    {
      "name": "projects.name.12",
      "description": "projects.description.12",
      "longDescription": "projects.systems.detail.12",
      "image": "assets/images/projects/colaborador.png",
      "tags": ["React", "Java", "Oracle"],
      "githubLink": "",
      "demoLink": ""
    },
    {
      "name": "projects.name.9",
      "description": "projects.description.9",
      "longDescription": "projects.systems.detail.9",
      "image": "assets/images/projects/parafinanciera.PNG",
      "tags": ["Angular"],
      "githubLink": "https://github.com/Jmurga16",
      "demoLink": ""
    },
    {
      "name": "projects.name.14",
      "description": "projects.description.14",
      "longDescription": "projects.systems.detail.14",
      "image": "assets/images/projects/restaurant-mvp.png",
      "tags": ["Angular", ".NET", "SQL Server"],
      "githubLink": "",
      "demoLink": ""
    },
  ];

  get visibleSystems(): IProjectList[] {
    return this.showAllSystems ? this.systemsList : this.systemsList.slice(0, 6);
  }

  landingsList: IProjectList[] = [
    {
      "name": "projects.landings.name.1",
      "description": "projects.landings.description.1",
      "image": "assets/images/projects/siempre-legal-web.png",
      "tags": ["Astro"],
      "githubLink": "",
      "demoLink": "https://www.siempre-legal.com/"
    },
    {
      "name": "projects.landings.name.2",
      "description": "projects.landings.description.2",
      "image": "assets/images/projects/devkora-web.png",
      "tags": ["Astro"],
      "githubLink": "",
      "demoLink": "https://www.devkora.com/"
    },
    {
      "name": "projects.landings.name.3",
      "description": "projects.landings.description.3",
      "image": "assets/images/projects/masuno-small.png",
      "tags": ["Angular"],
      "githubLink": "",
      "demoLink": ""
    },
  ];
}
