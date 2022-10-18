import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-validar-usuario',
  templateUrl: './validar-usuario.page.html',
  styleUrls: ['./validar-usuario.page.scss'],
})
export class ValidarUsuarioPage implements OnInit {

  usuario = {
    username: ''
  };


  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log("Login");
    this.detectarusuario();
  }

  async detectarusuario() {
    let usr = await this.storage.get(this.usuario.username);
    if (usr != null) {
      console.log(usr);
      this.storage.set('sesion', this.usuario.username);
      this.router.navigate(['/newcontra']);
    }
    else {
      console.log("Usuario No existe");
    }
  }

}
