import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  username: string='';

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,
    private storage:Storage,
  ) {
    this.activatedRouter.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state) {

        let usuario = this.router.getCurrentNavigation().extras.state.usr;
        console.log("Llego" + usuario.username);
        this.username = usuario.username;
        
      }
    })
  }

  ngOnInit() {
    this.vernombre();
  }

  async vernombre()
  {
    this.username=await this.storage.get('sesion');
  }
}