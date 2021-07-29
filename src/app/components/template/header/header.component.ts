import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarMenu: boolean = false;
  user:{id:number, name:string, email:string}|null = null
  constructor(private authService: AuthService){
  }
  ngOnInit() {
   
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        this.mostrarMenu = mostrar
        this.user = this.authService.getUser();
      }
      
    );
  }
  
}
