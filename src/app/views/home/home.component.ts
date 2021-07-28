import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

 mostrarMenu = false; 

  constructor(private authService: AuthService, private route: Router,){

  }
  ngOnInit() {
    if (this.authService.usuarioAutenticado === false) {
      this.route.navigate(['/login'])
    }
    
  }
   
}
