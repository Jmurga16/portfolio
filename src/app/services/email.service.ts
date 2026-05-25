import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    serviceId = environment.serviceId;
    templateId = environment.templateId;
    userId = environment.apiKeyEmail;

    sendEmail(templateParams: { from_name: string; from_email: string; message: string }): Promise<void> {
        return emailjs.send(this.serviceId, this.templateId, templateParams, this.userId)
            .then(() => undefined)
            .catch((error) => {
                console.error('Error al enviar el correo', error);
                throw error;
            });
    }
}
