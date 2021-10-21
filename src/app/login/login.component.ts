import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  inputusuario: string = "";
  inputsenha: string="";
  emitirUsuario = new EventEmitter<string>();


  fazerLogin(){ //FUNCAO PARA DIRECIONAR PARA OUTRO COMP
    
    this.router.navigate(['/home']); // -> HOME
    alert("Seja bem vindo "+this.inputusuario) //SEGUNDA ALTERNATIVA
    this.emitirUsuario.emit(this.inputusuario);  //ENVIAR PARA OUTRO COMP PELO EVENTEMITTER

  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.emitirUsuario.subscribe(
    );
  }

}
