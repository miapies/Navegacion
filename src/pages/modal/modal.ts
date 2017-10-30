import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string = '';
  edad: number = 0;

  constructor(private navParams: NavParams,
    private viewCtrl: ViewController) {
    this.nombre = navParams.get('nombre');
    this.edad = navParams.get('edad');

    console.log(this.nombre, this.edad);

  }

  cerrar_con_parametros() {
    const data = {
      nombre: "Juan Carlos",
      edad: 18,
      coords: {
        lat: 10,
        lng: -10
      }
    };

    this.viewCtrl.dismiss(data);
  }

  cerrar_sin_parametros() {

    this.viewCtrl.dismiss();
  }
}
