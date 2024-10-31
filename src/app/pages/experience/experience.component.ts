import { Component } from '@angular/core';
import { IExperienceList } from '../../models/interfaces/experience-list';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  displayedYears: Set<string> = new Set();
  experienceWithYears: IExperienceList[] = [];

  experienceList: IExperienceList[] = [
    {
      position: 'Desarrollador Senior',
      company: 'Ayesa',
      period: 'Mayo 2024 - Presente',
      description: 'Desarrollo de aplicaciones web con Angular 18, .NET 8 y Node.js, y uso de recursos Azure.'
    },
    {
      position: 'Desarrollador Senior',
      company: 'BC Digital',
      period: 'Abril 2023 - Abril 2024',
      description: 'Diseño, Análisis y Desarrollo Full Stack en Angular 16, .Net Core y SQL Server de aplicaciones bancarias.'
    },
    {
      position: 'Desarrollador Senior',
      company: 'TotalTech México',
      period: 'Septiembre 2022 - Marzo 2023',
      description: 'Migración de Sistema .Net MVC hacia Angular 13 + Api .Net.'
    },
    {
      position: 'Analista Programador Full Stack',
      company: 'Protiviti',
      period: 'Enero 2022 - Agosto 2022',
      description: 'Maquetado, Diseño, Análisis y Desarrollo Full Stack en Angular 12, .Net Core y SQL Server de aplicaciones web tipo ERP.'
    },
    {
      position: 'Desarrollador Web Full Stack',
      company: 'VisualSat',
      period: 'Noviembre 2021 - Enero 2022',
      description: 'Diseño, Análisis y Desarrollo Full Stack en HTML, CSS y Javascript; .Net (Azure Functions) y SQL Server de un sistema Web de Salud.'
    },
    {
      position: 'Analista Programador',
      company: 'Gestión & Sistemas',
      period: 'Agosto 2021 - Octubre 2021',
      description: 'Desarrollo de aplicaciones en C#, ASP .Net y Angular.'
    },
    {
      position: 'Analista Programador Full Stack',
      company: 'Lucky S.A.C',
      period: 'Octubre 2020 - Agosto 2021',
      description: 'Diseño, Análisis y Desarrollo Full Stack (C#, SQL Server, Html-Css y Typescript) en .Net Core y Angular del sistema ERP de la empresa.'
    },
    {
      position: 'Desarrollador Web Full Stack',
      company: 'Software Enterprise Services',
      period: 'Agosto 2019 - Septiembre 2020',
      description: 'Desarrollo full-stack (C#, SQL Server, Html-Css y Angular) en .NET, de los sistemas de información de la web de la empresa.'
    }
  ];

  ngOnInit(): void {
    this.processExperienceList();
  }

  processExperienceList(): void {
    this.experienceWithYears = this.experienceList.map((exp, index) => {
      const year = this.getYear(exp.period);
      const shouldDisplay = !this.displayedYears.has(year);
      if (shouldDisplay) {
        this.displayedYears.add(year);
      }
      return { ...exp, shouldDisplayYear: shouldDisplay, year };
    });
  }

  getYear(period: string): string {
    const yearMatch = period.match(/\d{4}/);
    return yearMatch ? yearMatch[0] : '';
  }

}
