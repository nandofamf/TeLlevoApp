import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerData = {
    phoneNumber: '',
    name: '',
    email: ''
  };

  constructor(private alertController: AlertController) {}

 
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

 
  async onRegisterSubmit() {
    
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    
    if (!this.registerData.phoneNumber || this.registerData.phoneNumber.length !== 8) {
      await this.showAlert('Datos incompletos', 'El número telefónico debe contener exactamente 8 dígitos.');
      return;
    }

    if (!this.registerData.name) {
      await this.showAlert('Datos incompletos', 'El nombre es obligatorio.');
      return;
    }

    
    if (!this.registerData.email || !emailPattern.test(this.registerData.email)) {
      await this.showAlert('Datos incompletos', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }

    
    await this.showAlert('Éxito', 'Se ha registrado correctamente.');

    this.registerData = {
      phoneNumber: '',
      name: '',
      email: ''
    };
  }
}
