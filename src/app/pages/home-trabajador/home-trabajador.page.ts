import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home-trabajador',
  templateUrl: './home-trabajador.page.html',
  styleUrls: ['./home-trabajador.page.scss'],
})
export class HomeTrabajadorPage  {

  username: string;
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,
    private storage:Storage,) {}


    ngOnInit() {
      this.vernombre();
    }
  
    async vernombre()
    {
      this.username=await this.storage.get('sesion');
    }

}
