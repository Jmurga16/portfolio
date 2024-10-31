import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {

      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      this.emailService.sendEmail(templateParams)
        .then(() => {
          this.contactForm.reset();
        });
    }
    else {
      alert("Complete el formulario correctamente.")
    }
  }
}