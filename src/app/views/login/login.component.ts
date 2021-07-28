import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   usuario: Usuario = new Usuario();
   cadUsuario: {name:string, email:string, password:string} = {name:'', email:'', password:''};
   cadastrar: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  fazerLogin(){
   this.authService.fazerLogin(this.usuario);
  }
  fazerCadastro(){
    const res = this.authService.cadastrar(this.cadUsuario);
    res.subscribe((res)=>{
      this.toggleCadastrar();
    })
  }
  toggleCadastrar(){
    this.cadastrar = !this.cadastrar;
  }
}
