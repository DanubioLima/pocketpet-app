import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceShowerPageRoutingModule } from './service-shower-routing.module';

import { ServiceShowerPage } from './service-shower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceShowerPageRoutingModule
  ],
  declarations: [ServiceShowerPage]
})
export class ServiceShowerPageModule {}
