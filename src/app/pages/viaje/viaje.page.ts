import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage {

  items: any[]=[];

  username: string;

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


  doRefresh(event){
    setTimeout(() => {
      this.items = Array(3);
      event.target.complete();
    }, 1500);
    
  }
}
