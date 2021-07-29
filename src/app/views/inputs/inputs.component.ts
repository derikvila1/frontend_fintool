import { AuthService } from 'src/app/views/login/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestCreate, ResponseInputs } from './input.model';
import { InputService } from './input.service';
import { DialogContentExampleDialog } from '../dialog/dialog.component';


@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})


export class InputsComponent implements OnInit {
  
  request: RequestCreate = {
    userId: this.authService.user?.id || 0,
    value: 0,
    category: "",
    output: false,
    date: "",
    description: "",
  }
   
  inputs: ResponseInputs[] = [];
  
  @Output() updateEvent = new EventEmitter<string>();




  constructor(private inputService: InputService, public dialog: MatDialog, private authService: AuthService ) { }
  ngOnInit(): void {
    this.updateInputs();
  }

  updateInputs(){
    this.authService.updateEmitter.emit(true);

  }

  deleteInput(id:number){
    this.inputService.deleteInput(id).subscribe(res=>{
      console.log(res)
      this.updateInputs();
      
    });
  }

  save() {
    console.log(this.request);
    this.inputService.createInput(this.request).subscribe(res => {
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
