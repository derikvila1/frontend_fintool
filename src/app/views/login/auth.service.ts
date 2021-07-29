import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "/api/users/";

  usuarioAutenticado: boolean = false;
  user:{id:number, name:string, email:string}|null = null;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  updateEmitter = new EventEmitter<boolean>();

  constructor( private router: Router, private http: HttpClient) { }
  
  fazerLogin(usuario: Usuario){
    const result= this.http.post<{status:boolean,message:string,user?:any}>(this.url+"auth",usuario);
    result.subscribe((res) => {
      this.setUser(res.user)
      if(res.status){
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/'])
      } else {
        this.usuarioAutenticado = false
        this.mostrarMenuEmitter.emit(false);
      }
    });
  }

  cadastrar(usuario:{name:string, email:string, password:string}){
    return this.http.post<{status:boolean,message:string}>(this.url+"cadastrar",usuario);
  }

  logOut(){
    this.setUser(null);
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['/login']);
  }
  getUser(){
    return this.user;
  }
  setUser(user:{id:number, name:string, email:string}|null){
    this.user = user;
  }
}
