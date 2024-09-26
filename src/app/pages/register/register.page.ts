import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  // Definimos un objeto para almacenar los datos del formulario
  registerData = {
    phoneNumber: '',
    name: '',
    email: ''
  };

  constructor(private alertController: AlertController) {}

  // Método para mostrar la alerta
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Método que se ejecuta cuando se envía el formulario
  async onRegisterSubmit() {
    // Definimos el patrón para validar el correo electrónico con formato básico
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    // Validar el número telefónico
    if (!this.registerData.phoneNumber || this.registerData.phoneNumber.length !== 8) {
      await this.showAlert('Datos incompletos', 'El número telefónico debe contener exactamente 8 dígitos.');
      return;
    }

    // Validar el nombre
    if (!this.registerData.name) {
      await this.showAlert('Datos incompletos', 'El nombre es obligatorio.');
      return;
    }

    // Validar el correo electrónico
    if (!this.registerData.email || !emailPattern.test(this.registerData.email)) {
      await this.showAlert('Datos incompletos', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Si todas las validaciones son correctas, mostrar un mensaje de éxito
    await this.showAlert('Éxito', 'Se ha registrado correctamente.');

    // Limpiar los campos después del registro
    this.registerData = {
      phoneNumber: '',
      name: '',
      email: ''
    };
  }
}
