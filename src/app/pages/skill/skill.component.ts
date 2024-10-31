import { Component } from '@angular/core';
import { ISkillList } from '../../models/interfaces/skill-list';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  skillsList: ISkillList = {
    frontend: [
      { name: 'Angular', logo: 'assets/images/skills/angular.svg' },
      { name: 'HTML', logo: 'assets/images/skills/html5.svg' },
      { name: 'CSS', logo: 'assets/images/skills/css.svg' },
      { name: 'JavaScript', logo: 'assets/images/skills/javascript.svg' },
      { name: 'Bootstrap', logo: 'assets/images/skills/bootstrap.svg' },
      { name: 'Material', logo: 'assets/images/skills/materialui.svg' },
      { name: 'Prime NG', logo: 'assets/images/skills/primeng.svg' },
    ],
    backend: [
      { name: '.NET', logo: 'assets/images/skills/dotnet.svg' },
      { name: 'PHP', logo: 'assets/images/skills/php.svg' },
      { name: 'Java', logo: 'assets/images/skills/java.svg' },
      { name: 'Node.js', logo: 'assets/images/skills/nodejs.svg' },
      //{ name: 'Express', logo: 'assets/images/skills/expressjs.svg' },
    ],
    databases: [
      { name: 'SQL Server', logo: 'assets/images/skills/sql-server.svg' },
      { name: 'MySQL', logo: 'assets/images/skills/mysql.svg' },
      { name: 'PostgreSQL', logo: 'assets/images/skills/postgresql.svg' },
      { name: 'MongoDB', logo: 'assets/images/skills/mongodb-wordmark.svg' },
    ],
    extra: [
      { name: 'Azure', logo: 'assets/images/skills/azure.svg' },
      { name: 'Git', logo: 'assets/images/skills/git.svg' },
      { name: 'Postman', logo: 'assets/images/skills/postman.svg' },
      { name: 'Figma', logo: 'assets/images/skills/figma.svg' },
      //{ name: 'Adobe XD', logo: 'assets/images/skills/adobe-xd.svg' },
    ],
  };
}
