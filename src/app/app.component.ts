import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage:Storage,
    private menu:MenuController) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  cerrar()
  {
    this.menu.close('first');
  }

}
