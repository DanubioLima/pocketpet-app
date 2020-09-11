import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginKindsPageRoutingModule } from './login-kinds-routing.module';

import { LoginKindsPage } from './login-kinds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginKindsPageRoutingModule
  ],
  declarations: [LoginKindsPage]
})
export class LoginKindsPageModule {}
