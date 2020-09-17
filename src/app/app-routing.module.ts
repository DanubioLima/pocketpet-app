import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-kinds',
    loadChildren: () => import('./login-kinds/login-kinds.module').then( m => m.LoginKindsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'login-email',
    loadChildren: () => import('./login-email/login-email.module').then( m => m.LoginEmailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'service-shower',
    loadChildren: () => import('./service-shower/service-shower.module').then( m => m.ServiceShowerPageModule)
  },
  {
    path: 'service-step-two',
    loadChildren: () => import('./service-step-two/service-step-two.module').then( m => m.ServiceStepTwoPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'service-step-three',
    loadChildren: () => import('./service-step-three/service-step-three.module').then( m => m.ServiceStepThreePageModule)
  },
  {
    path: 'service-step-four',
    loadChildren: () => import('./service-step-four/service-step-four.module').then( m => m.ServiceStepFourPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'token',
    loadChildren: () => import('./token/token.module').then( m => m.TokenPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
