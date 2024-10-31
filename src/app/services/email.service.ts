import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    serviceId = environment.serviceId
    templateId = environment.templateId;
    userId = environment.apiKeyEmail

    constructor() {
    }

    sendEmail(templateParams: { from_name: string; from_email: string; message: string }): Promise<void> {

        return emailjs.send(this.serviceId, this.templateId, templateParams, this.userId)
            .then((response) => {
                console.log('Correo enviado exitosamente', response.status, response.text);
                alert('Tu mensaje ha sido enviado correctamente');
            })
            .catch((error) => {
                console.error('Error al enviar el correo', error);
                alert('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.');
            });
    }
}