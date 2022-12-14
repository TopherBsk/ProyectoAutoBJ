import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticationService } from 'src/app/shared/authentication-service';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage  {

  username: string;
  
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,
    private storage:Storage,
    public authService: AuthenticationService,) {}


    cerrarSesion(){
      this.cerrar();
      this.router.navigate(['/loginpage']);
  
    }
  
  ngOnInit() {
    this.vernombre();
  }

  async cerrar()
  {
    await this.storage.set('sesion',null);


  }
  async vernombre()
  {
    this.username=await this.storage.get('sesion');
  }
}
