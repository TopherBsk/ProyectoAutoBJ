import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthenticationService } from 'src/app/shared/authentication-service';
import { Credenciales } from '../../interfaces/usuario';

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
    public authService: AuthenticationService) { }

  ngOnInit() {
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
  
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['/home']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
