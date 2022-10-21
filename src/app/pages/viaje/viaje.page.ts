import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Viajes } from '../../interfaces/viajes';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit{

  items: any[]=[];

  username: string;

  viajes:Viajes={
    precio:1000,
    ubicacion:'',
    destino:'',
    patente:'',
  }

    

  // seacherViaje:any;
  // viaje: string;

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,
    private storage: Storage,) { }

    async verviaje() {
      this.viajes.precio = await this.storage.get('viajee');
      this.viajes.destino = await this.storage.get('viajee');
    }
  onSubmit(){
    this.verviaje();


  }
  set(key:string,data:Viajes){
    try{
      localStorage.setItem(key,JSON.stringify(data));
    }catch(Viajes){
      console.log(Viajes);
      
    }
  }
  get(key:string){
    try{
      return JSON.parse(localStorage.getItem(key));
    }catch(Viajes){
      console.log(Viajes);
      
    }
  }
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


// busqueda ---------------------------------------------------------------------
  // searchCustomer(event){
  //   const text = event.target.value;
  //   this.seacherViaje= this.viaje;
  //   if(text && text.trim() !=''){
  //     this.seacherViaje=this.seacherViaje.filter((viaje:any)=)
  //   }
  // }

}
