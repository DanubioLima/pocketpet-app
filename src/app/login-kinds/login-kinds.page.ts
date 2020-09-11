import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-kinds",
  templateUrl: "./login-kinds.page.html",
  styleUrls: ["./login-kinds.page.scss"],
})
export class LoginKindsPage implements OnInit {
  items = [
    {
      text: "Continuar com e-mail",
      icon: "mail",
      iconClass: "",
    },
    {
      text: "Continuar com a Apple",
      icon: "logo-apple",
      iconClass: "",
    },
    {
      text: "Continuar com o Facebook",
      icon: "logo-facebook",
      iconClass: "facebook",
    },
    {
      text: "Continuar com o Google",
      icon: "logo-google",
      iconClass: "google",
    },
    {
      text: "Criar conta",
      icon: "person-add",
      iconClass: "",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
