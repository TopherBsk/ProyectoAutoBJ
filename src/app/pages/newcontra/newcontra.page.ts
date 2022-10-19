import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-newcontra',
  templateUrl: './newcontra.page.html',
  styleUrls: ['./newcontra.page.scss'],
})
export class NewcontraPage implements OnInit {

  
  constructor(private storage:Storage,private router:Router) { }

  ngOnInit() {
  }

}
