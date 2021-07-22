import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseInputs } from './input.model';
import { InputService } from './input.service';


@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})

export class InputsComponent implements OnInit {
  
  request: RequestCreate = {
    userId: 1,
    value: 1,
    category: "123",
    output: false,
    date: "10101020",
    description: "123",
  }

  inputs: ResponseInputs[] = [];

  constructor(private inputService: InputService) { }
  ngOnInit(): void {
    this.updateInputs();
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

  save() {
    console.log(this.request);
    this.inputService.createInput(this.request).subscribe(res => {
      this.updateInputs();
    });
  }

}
