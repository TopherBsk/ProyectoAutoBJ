import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizarGuard } from './guards/autorizar.guard';
import { NoAutorizarGuard  } from './guards/no-autorizar.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'loginpage',
    pathMatch: 'full'
  },

  {
    path: 'home',
    
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./pages/loginpage/loginpage.module').then( m => m.LoginpagePageModule),
    canActivate:[NoAutorizarGuard ]
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoAutorizarGuard ]
  },
  {
    path: 'validar-usuario',
    loadChildren: () => import('./pages/validar-usuario/validar-usuario.module').then( m => m.ValidarUsuarioPageModule),
    canActivate:[NoAutorizarGuard ]
  },
  {
    path: 'newcontra',
    loadChildren: () => import('./pages/newcontra/newcontra.module').then( m => m.NewcontraPageModule),
    canActivate:[NoAutorizarGuard ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
