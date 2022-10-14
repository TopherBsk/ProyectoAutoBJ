import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage  {

  username: string;
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,) {}

  ngOnInit() {
  }

}
