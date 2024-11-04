import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  /* personalInfo = [
    { tag: "Nombre", description: "José Murga" },
    { tag: "Carrera", description: "Ingeniería de Sistemas" },
    { tag: "Teléfono", description: "+51 992692389" },
    { tag: "Email", description: "jose.murga16@hotmail.com" },
    { tag: "País", description: "Perú" }
  ] */

  personalInfo = [
    { tag: "personal.tag.name", description: "personal.description.name" },
    { tag: "personal.tag.profession", description: "personal.description.profession" },
    { tag: "personal.tag.phone", description: "personal.description.phone" },
    { tag: "personal.tag.email", description: "personal.description.email" },
    { tag: "personal.tag.country", description: "personal.description.country" }
  ]

}
