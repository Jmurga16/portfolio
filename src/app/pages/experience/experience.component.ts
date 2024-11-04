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

  /*  experienceList: IExperienceList[] = [
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
  */
  experienceList: IExperienceList[] = [
    {
      position: 'experience.position.1',
      company: 'Ayesa',
      period: 'experience.period.1',
      periodYear: 'Mayo 2024 - Presente',
      description: 'experience.description.1'
    },
    {
      position: 'experience.position.2',
      company: 'BC Digital',
      period: 'experience.period.2',
      periodYear: 'Abril 2023 - Abril 2024',
      description: 'experience.description.2'
    },
    {
      position: 'experience.position.3',
      company: 'TotalTech México',
      period: 'experience.period.3',
      periodYear: 'Septiembre 2022 - Marzo 2023',
      description: 'experience.description.3'
    },
    {
      position: 'experience.position.4',
      company: 'Protiviti',
      period: 'experience.period.4',
      periodYear: 'Enero 2022 - Agosto 2022',
      description: 'experience.description.4'
    },
    {
      position: 'experience.position.5',
      company: 'VisualSat',
      period: 'experience.period.5',
      periodYear: 'Noviembre 2021 - Enero 2022',
      description: 'experience.description.5'
    },
    {
      position: 'experience.position.6',
      company: 'Gestión & Sistemas',
      period: 'experience.period.6',
      periodYear: 'Agosto 2021 - Octubre 2021',
      description: 'experience.description.6'
    },
    {
      position: 'experience.position.7',
      company: 'Lucky S.A.C',
      period: 'experience.period.7',
      periodYear: 'Octubre 2020 - Agosto 2021',
      description: 'experience.description.7'
    },
    {
      position: 'experience.position.8',
      company: 'Software Enterprise Services',
      period: 'experience.period.8',
      periodYear: 'Agosto 2019 - Septiembre 2020',
      description: 'experience.description.8'
    }
  ];

  ngOnInit(): void {
    this.processExperienceList();
  }

  processExperienceList(): void {
    this.experienceWithYears = this.experienceList.map((exp, index) => {
      const year = this.getYear(exp.periodYear);
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
