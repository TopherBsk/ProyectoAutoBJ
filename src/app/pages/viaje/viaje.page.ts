import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage {
  username: string;
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,) { }

  ngOnInit() {
  }

}
