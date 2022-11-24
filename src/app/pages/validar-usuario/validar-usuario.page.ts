import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Credenciales } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-validar-usuario',
  templateUrl: './validar-usuario.page.html',
  styleUrls: ['./validar-usuario.page.scss'],
})
export class ValidarUsuarioPage implements OnInit {



  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }



}
