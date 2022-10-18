import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Viajes } from '../../interfaces/viajes';


@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage {

  username: string;
  
  viajes:Viajes={
  precio: 1000,
  ubicacion: '',
  destino:'',
  patente: '',
  }

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,
    private storage: Storage,) { }
    

  ngOnInit() {
    this.vernombre();
  }

  async vernombre() {
    this.username = await this.storage.get('sesion');
  }

  onSubmit() {
    console.log(this.viajes);
    this.guardar();

  }
  async guardar() {
    let existe = await this.storage.get(this.viajes.patente);

    if (existe == null) {
      await this.storage.set(this.viajes.patente, this.viajes);
      console.log("Viaje fue creado");
      this.router.navigate(['/viaje']);
    }
    else {
      console.log("Primero complete su viaje")
    }
  }
}
