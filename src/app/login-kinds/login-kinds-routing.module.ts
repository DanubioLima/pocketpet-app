import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginKindsPage } from './login-kinds.page';

const routes: Routes = [
  {
    path: '',
    component: LoginKindsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginKindsPageRoutingModule {}
