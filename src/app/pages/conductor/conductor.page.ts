import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Viajes } from '../../interfaces/viajes';
import { PickerController } from '@ionic/angular';



@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

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
    private storage: Storage,
    private pickerCtrl: PickerController,) { }
    

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

    if (existe == null) 
    {
      await this.storage.set(this.viajes.patente, this.viajes);
      console.log("Viaje fue creado");
      this.router.navigate(['/viaje']);
    }
    else {
      console.log("Primero complete su viaje")
    }
  }
  async mirarviaje() {
    let usr = await this.storage.get(this.viajes.destino);
    if (usr != null) {
      console.log(usr);
      this.storage.set('viajee', this.viajes.destino);
    }
    else {
      console.log("quedo la caga");
    }
  }


}
