import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  usuario={
    username:'',
    password:''
  };

  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log("Login");
    this.validarusuario();
    this.validarpassword();
  }

  async validarusuario()
  {
    let usr= await this.storage.get(this.usuario.username);
    if(usr!=null)
    {
      console.log(usr);
      this.storage.set('sesion',this.usuario.username);
      this.router.navigate(['/home']);
    }
    else{
      console.log("Usuario incorrecto");
    }
  }
  async validarpassword()
  {
    let pass= await this.storage.get(this.usuario.password);
    if(pass!=null)
    {
      console.log(pass);
      this.storage.set('sesion',this.usuario.password);
      this.router.navigate(['/home']);
    }
    else{
      console.log("Password incorrecto");
    }
  }

}
