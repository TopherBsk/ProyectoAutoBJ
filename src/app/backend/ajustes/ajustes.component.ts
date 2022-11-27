import { Component, OnInit } from '@angular/core';


import { autos } from 'src/app/model/models/models.module';
import { AuthService } from 'src/app/services/auth.service';
import { InteracionService } from '../../services/interacion.service';
@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent implements OnInit {

  data: autos = {
    autos:{
      conductor: '',
      auto: '',
      color: '',
      asientos:null,
      hora: '',
      id: '',
      descripcion: '',
    }
  }

  constructor(private database: AuthService,
    private interacion: InteracionService) { }

  ngOnInit() {}

}
