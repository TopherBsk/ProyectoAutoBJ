import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/services/auth.service';
import { Credenciales } from '../../interfaces/usuario';
import { InteracionService } from '../../services/interacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  Credenciales:Credenciales = {
    correo: null,
    password: null,
    Usuario:null
  };

  constructor(private storage:Storage,
    private router: Router,
    private auth: AuthService,
    private interaction: InteracionService) { }

  ngOnInit() {
  }


  async login() {
    console.log('credenciales->', this.Credenciales);
    const res= await this.auth.login(this.Credenciales.correo, this.Credenciales.password).catch(error =>{
      console.log('error');
      });
    if (res){
      console.log('res ->', res);
    }
    this.validarpassword();
    this.validarcorreo();
    this.router.navigate(['/home'])
    
  }





  async validarcorreo() {
    let usr = await this.storage.get(this.Credenciales.correo);
    if (usr != null) {
      console.log(usr);
      this.storage.set('sesion', this.Credenciales.correo);
      this.router.navigate(['/home']);
    }
    else {
      console.log("Usuario incorrecto");
    }
  }
  async validarpassword() {
    let pass = await this.storage.get(this.Credenciales.password);
    if (pass != null) {
      console.log(pass);
      this.storage.set('sesion', this.Credenciales.password);
      this.router.navigate(['/home']);
    }
    else {
      console.log("Password incorrecto");
    }
  }

}
