import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizarGuard } from './guards/autorizar.guard';
import { AjustesComponent } from './backend/ajustes/ajustes.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'loginpage',
    pathMatch: 'full'
  },

  {path: 'ajustes', component: AjustesComponent},

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./pages/loginpage/loginpage.module').then( m => m.LoginpagePageModule),
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule),
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule),
    
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule),
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    
  },
  {
    path: 'verificar-email',
    loadChildren: () => import('./pages/verificar-email/verificar-email.module').then( m => m.VerificarEmailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
