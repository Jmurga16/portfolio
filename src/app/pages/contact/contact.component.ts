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
  isSubmitting = false;
  statusMessage = '';
  statusType: 'success' | 'error' | '' = '';
  private readonly cooldownMs = 30000;
  private lastSubmitAt = 0;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      website: ['']
    });
  }

  async onSubmit() {
    this.statusMessage = '';
    this.statusType = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.setStatus('error', 'Complete el formulario correctamente. Complete the form correctly.');
      return;
    }

    if (this.contactForm.value.website) {
      this.contactForm.reset();
      return;
    }

    const now = Date.now();
    if (now - this.lastSubmitAt < this.cooldownMs) {
      this.setStatus('error', 'Espera unos segundos antes de enviar otro mensaje.');
      return;
    }

    const templateParams = {
      from_name: this.cleanField(this.contactForm.value.name),
      from_email: this.cleanField(this.contactForm.value.email),
      message: this.cleanField(this.contactForm.value.message)
    };

    try {
      this.isSubmitting = true;
      await this.emailService.sendEmail(templateParams);
      this.lastSubmitAt = Date.now();
      this.contactForm.reset();
      this.setStatus('success', 'Tu mensaje ha sido enviado correctamente.');
    } catch {
      this.setStatus('error', 'Hubo un problema al enviar tu mensaje. Intentalo de nuevo mas tarde.');
    } finally {
      this.isSubmitting = false;
    }
  }

  private cleanField(value: string): string {
    return value
      .trim()
      .replace(/[<>]/g, '')
      .replace(/\s{2,}/g, ' ');
  }

  private setStatus(type: 'success' | 'error', message: string): void {
    this.statusType = type;
    this.statusMessage = message;
  }
}
