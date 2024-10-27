import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsList = [
    {
      name: 'CRM Legal',
      description: 'Sistema Web para un Estudio Jurídico hecho en Angular, .NET y SQL Server',
      image: 'assets/images/projects/lucky.png',
      githubLink: '',
      demoLink: 'https://proyecto1-demo.com'
    },
    {
      name: 'Lucky ERP',
      description: 'Sistema Web para una empresa de Marketing hecho en Angular, .NET y SQL Server',
      image: 'assets/images/projects/crmlegal.png',
      githubLink: '',
      demoLink: 'https://crm-legal.azurewebsites.net/',
    },
    {
      name: 'Sistema web de administracion presupuestal',
      description: 'Sistema Web hecho en Vue, Java y SQL Server ',
      image: 'assets/images/projects/referencial.png',
      githubLink: 'https://github.com/Jmurga16',
      demoLink: 'https://proyecto1-demo.com'
    },
    {
      name: 'Comprando en Red',
      description: 'Sistema Web hecho en Angular',
      image: 'assets/images/projects/referencial.png',
      githubLink: 'https://github.com/Jmurga16',
      demoLink: 'https://proyecto1-demo.com'
    },
    {
      name: 'Mas Uno',
      description: 'Landing Page hecho en Angular',
      image: 'assets/images/projects/referencial.png',
      githubLink: 'https://github.com/Jmurga16',
      demoLink: 'https://proyecto1-demo.com'
    },
    {
      name: 'Para Financiera',
      description: 'Sistema Web hecho en Angular.',
      image: 'assets/images/projects/referencial.png',
      githubLink: 'https://github.com/Jmurga16',
      demoLink: 'https://proyecto1-demo.com'
    }
  ];
}
