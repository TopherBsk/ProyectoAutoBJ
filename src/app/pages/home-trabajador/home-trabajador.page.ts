import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-trabajador',
  templateUrl: './home-trabajador.page.html',
  styleUrls: ['./home-trabajador.page.scss'],
})
export class HomeTrabajadorPage  {

  username: string;
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,) {}


  ngOnInit() {
  }

}
