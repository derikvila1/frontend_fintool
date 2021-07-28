import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/login/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mostrarMenu: boolean = false;
  constructor(private authService: AuthService){

  }
  ngOnInit() {
   
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
  logout(){
    this.authService.logOut();
  }
}
