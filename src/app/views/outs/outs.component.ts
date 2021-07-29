import { Component, OnInit } from '@angular/core';
import { InputService } from '../inputs/input.service';
import { ResponseInputs } from '../inputs/input.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialog } from '../dialog/dialog.component';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-outs',
  templateUrl: './outs.component.html',
  styleUrls: ['./outs.component.css']
})
export class OutsComponent implements OnInit {

  inputs: ResponseInputs[] = [];

  constructor(private inputService: InputService,public dialog: MatDialog,private authService: AuthService,private route: Router) { }

  ngOnInit(): void {this.updateInputs();

    this.authService.updateEmitter.subscribe(value=>value && this.updateInputs());
    if (this.authService.usuarioAutenticado === false) {
      this.route.navigate(['/login'])
      
    }

  }
  
  onlyOut(){
    this.inputs = this.inputs.filter((item)=>item.output);
  }
  updateInputs(){
    this.inputService.getInputs(Number(this.authService.user?.id)).subscribe(res => {
      console.log(res);
      this.inputs = res;
      this.onlyOut();
    });
  }
  deleteInput(id:number){
    this.inputService.deleteInput(id).subscribe(res=>{
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