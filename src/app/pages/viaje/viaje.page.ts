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

  items: any[];

  username: string;

  viajes:string;

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,
    private storage: Storage,) { }

  ngOnInit() {
    this.vernombre();
    this.verviaje();
  }

async verviaje(){
  this.viajes=await this.storage.get('lugar');
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

  abrirMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
// busqueda ---------------------------------------------------------------------
  // searchCustomer(event){
  //   const text = event.target.value;
  //   this.seacherViaje= this.viaje;
  //   if(text && text.trim() !=''){
  //     this.seacherViaje=this.seacherViaje.filter((viaje:any)=)
  //   }
  // }

}
