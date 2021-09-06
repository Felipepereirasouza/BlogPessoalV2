import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Userlogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

userlogin : Userlogin =new Userlogin ()

  constructor(
    private auth: AuthService,
    private router : Router
  ) { }

  ngOnInit() {

    window.scroll (0,0)
  }

  entrar (){

    this.auth.entrar(this.userlogin).subscribe((resp:Userlogin)=>{
      this.userlogin = resp

      environment.token=this.userlogin.token
      environment.nome=this.userlogin.nome
      environment.foto=this.userlogin.foto
      environment.id=this.userlogin.id



      this.userlogin.foto

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuario ou senha estão incorretos!')

      }

    })
  }

}
