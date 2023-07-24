import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const AppRoutes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./landing-page/landing-page.module').then(landing => landing.LandingPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./management/management.module').then(management => management.ManagementModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }