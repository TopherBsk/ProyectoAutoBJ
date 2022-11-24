import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Credenciales} from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  Credenciales:Credenciales = {
    correo: null,
    password: null,
    Usuario:null,
  };

  constructor(private storage:Storage,private router:Router) { }
  ngOnInit() {
  }
  onSubmit()
  {
    console.log(this.Credenciales);
    this.guardar();
    
  }
  async guardar()
  {
    let existe=await this.storage.get(this.Credenciales.correo);

    if(existe==null)
    {
      await this.storage.set(this.Credenciales.correo,this.Credenciales);
      console.log("Usuario fue creado");
      this.router.navigate(['/loginpage']);
    }
    else{
      console.log("Ya existe!")
    }
  }

}
