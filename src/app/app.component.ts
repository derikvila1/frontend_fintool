import { Component } from '@angular/core';
import { AuthService } from './views/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIN-TOOL';

  mostrarMenu: boolean = false;
  constructor(private authService: AuthService){

  }
  ngOninit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
