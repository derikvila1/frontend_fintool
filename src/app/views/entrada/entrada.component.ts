import { Component, OnInit, SimpleChange } from '@angular/core';
import { InputService } from '../inputs/input.service';
import { ResponseInputs } from '../inputs/input.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialog } from '../dialog/dialog.component';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})

export class EntradaComponent implements OnInit {
  
  inputs: ResponseInputs[] = [];

  constructor(private inputService: InputService,public dialog: MatDialog,private authService: AuthService,private route: Router) { }
  
  ngOnInit(): void {
    this.updateInputs();

    if (this.authService.usuarioAutenticado === false) {
      this.route.navigate(['/login'])
      
    }
  }

  updateInputs(){
    this.inputService.getInputs().subscribe(res => {
      console.log(res);
      this.inputs = res;
    });
  }
  deleteInput(id:number){
    this.inputService.deleteInput(id).subscribe(res=>{
      console.log(res)
      this.updateInputs();
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
