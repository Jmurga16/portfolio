import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProjectList } from '../../../models/interfaces/project-list';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Input() project!: IProjectList;
  constructor(public activeModal: NgbActiveModal) {}
}
