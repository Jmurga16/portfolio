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
      name: 'CRM Legal',
      description: 'Sistema Web para un Estudio Jurídico hecho en Angular, .NET y SQL Server',
      image: 'assets/images/projects/crmlegal.png',
      githubLink: '',
      demoLink: 'https://crm-legal.azurewebsites.net/'
    },
    {
      name: 'Sistema Web para Gestión de Almacen',
      description: 'Sistema Web para un almacen de Productos Orgánicos hecho en Angular, .NET y SQL Server',
      image: 'assets/images/projects/crmlegal.png',
      githubLink: '',
      demoLink: ''
    },
    {
      name: 'Lucky ERP',
      description: 'Sistema Web para una empresa de Marketing hecho en Angular, .NET y SQL Server',
      image: 'assets/images/projects/lucky.png',
      githubLink: '',
      demoLink: 'https://www.grupolucky.com/',
    },
    {
      name: 'Inventario',
      description: 'Sistema Web de Inventario hecho en Angular, .NET y SQL Server',
      image: 'assets/images/projects/inventario.png',
      githubLink: 'https://github.com/Jmurga16/Inventario.Front',
      demoLink: '',
    },
    {
      name: 'Libros y Asignaturas',
      description: 'CRUD hecho en Angular, .NET y SQL Server',
      image: 'assets/images/projects/libros-asignaturas.png',
      githubLink: 'https://github.com/Jmurga16/Libros-Asignaturas',
      demoLink: '',
    },
    {
      name: 'Gestor de Alumnos y Notas',
      description: 'Sistema hecho en Angular, .NET y SQL Server',
      image: 'assets/images/projects/alumnos-notas.png',
      githubLink: 'https://github.com/Jmurga16/GestorAlumnos.Front',
      demoLink: '',
    },
    {
      name: 'Mas Uno',
      description: 'Landing Page hecho en Angular',
      image: 'assets/images/projects/masuno.png',
      githubLink: '',
      demoLink: ''
    },
    {
      name: 'Generador de Códigos de Descuentos',
      description: 'Sistema Generador de códigos hecho en Angular',
      image: 'assets/images/projects/gestor-codigos.png',
      githubLink: 'https://github.com/Jmurga16/GeneradorCodigos.Front',
      demoLink: ''
    },
    {
      name: 'Para Financiera',
      description: 'Sistema Web hecho en Angular.',
      image: 'assets/images/projects/referencial.png',
      githubLink: 'https://github.com/Jmurga16',
      demoLink: ''
    },
    {
      name: 'Sistema web de administracion presupuestal',
      description: 'Sistema Web hecho en Vue, Java y SQL Server ',
      image: 'assets/images/projects/referencial.png',
      githubLink: 'https://github.com/Jmurga16',
      demoLink: ''
    },
    {
      name: 'Sistema de Gestión Administrativa de Posgrado',
      description: 'Sistema Web hecho en React, Java y Oracle',
      image: 'assets/images/projects/referencial.png',
      githubLink: '',
      demoLink: ''
    },
    {
      name: 'Sistema Web de Agendamiento de Clientes Aquafiltek',
      description: 'Sistema Web hecho en PHP nativo, Javascript y MySQL',
      image: 'assets/images/projects/referencial.png',
      githubLink: '',
      demoLink: ''
    }
  ];
}
