import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { User } from '../Model/User';
import { Userlogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  entrar (userlogin : Userlogin): Observable<Userlogin>{

  return this.http.post<Userlogin>('http://localhost:8080/usuarios/logar',userlogin)

  }

  cadastrar (user:User): Observable<User>{

    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar',user)

  }

  logado (  ) {

    let ok : boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
