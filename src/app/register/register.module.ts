import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RegisterPageRoutingModule } from "./register-routing.module";

import { RegisterPage } from "./register.page";

import { BrMaskerModule } from "br-mask";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    BrMaskerModule,
  ],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
