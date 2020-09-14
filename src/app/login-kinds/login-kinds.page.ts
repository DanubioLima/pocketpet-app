import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-kinds",
  templateUrl: "./login-kinds.page.html",
  styleUrls: ["./login-kinds.page.scss"],
})
export class LoginKindsPage implements OnInit {
  items = [
    {
      link: "/login-email",
      text: "Continuar com e-mail",
      icon: "mail",
      iconClass: "",
    },
    {
      link: "/register",
      text: "Continuar com a Apple",
      icon: "logo-apple",
      iconClass: "",
    },
    {
      link: "/register",
      text: "Continuar com o Facebook",
      icon: "logo-facebook",
      iconClass: "facebook",
    },
    {
      link: "/register",
      text: "Continuar com o Google",
      icon: "logo-google",
      iconClass: "google",
    },
    {
      link: "/register",
      text: "Criar conta",
      icon: "person-add",
      iconClass: "",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
