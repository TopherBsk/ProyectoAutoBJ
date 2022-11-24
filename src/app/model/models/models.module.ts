import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface autos  { 
  autos:{
    conductor: string;
    auto: string;
    color: string;
    asientos: number;
    hora: string;
    id: string;
    descripcion: string;
    }
}
export interface estudiantes  { 
  estudiantes:{
    nombre: string;
    id: string;
    }
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelsModule { }
