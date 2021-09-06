import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { Userlogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  validarSenha: string
  tipoUsuario: string

  constructor(
 private authService:AuthService,
 private router : Router

 ) {}

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmaSenha (event: any) {

    this.validarSenha = event.target.value

  }

  tipoUser (event:any) {

    this.tipoUsuario= event.target.value

  }

  cadastrar () {

    this.user.tipo = this.tipoUsuario

    if ( this.user.senha != this.validarSenha ) {
      alert("as senhas estão incorretas")
    }
    else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!')
      })

    }

  }

}
