import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Mensaje enviado:', this.contactData);
      form.reset();
    }
  }
}
