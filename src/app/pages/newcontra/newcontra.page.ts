import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario2} from 'src/app/interfaces/nueva-contra';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-newcontra',
  templateUrl: './newcontra.page.html',
  styleUrls: ['./newcontra.page.scss'],
})
export class NewcontraPage implements OnInit {

  usuario={
    password:''
  };

  constructor(private storage:Storage,private router:Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.usuario);
    this.guardar();
    
  }
  
  async guardar()
  {
    let existe=await this.storage.get(this.usuario.password);

    if(existe==null)
    {
      await this.storage.set(this.usuario.password,this.usuario);
      console.log("Contraseña cambiada");
      this.router.navigate(['/loginpage']);
    }
    else{
      console.log("Ya existe!")
    }
  }

}
