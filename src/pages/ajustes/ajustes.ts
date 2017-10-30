import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.paginas';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController) { }

  activarPrincipal() {
    this.navCtrl.parent.select(2);
  }

  mostrar_modal() {
    const modal = this.modalCtrl
      .create(ModalPage, { nombre: "Fernando", edad: 30 });

    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        console.log("Data del modal:", data);
      } else {
        console.log("Se cerró sin parámetros");
      }
    });
  }

}
