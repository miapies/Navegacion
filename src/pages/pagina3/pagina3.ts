import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-pagina3',
    templateUrl: 'pagina3.html'
})

export class Pagina3Page {

    mutante: any;

    constructor(private navParams: NavParams,
        private navCtrl: NavController) {
        console.log(navParams);

        if (navParams.get('mutante')) {
            this.mutante = navParams.get('mutante');
        }
    }

    irAtras() {
        this.navCtrl.pop();
    }

    irRoot() {
        this.navCtrl.popToRoot();
    }
}
