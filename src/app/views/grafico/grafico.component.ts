import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ResponseInputs } from '../inputs/input.model';
import { InputService } from '../inputs/input.service';
import { AuthService } from '../login/auth.service';

interface Mes {
  value: string;
  viewValue: string;
}
interface Ano {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})


export class GraficoComponent implements OnInit {
  
 
  inputs: ResponseInputs[] = [];
  data:{input:number, output:number}[] = [];
  year:Number = 2021;

  selectedYear:number = 2021;

  constructor(private inputService: InputService, private authService: AuthService) { 
    Chart.register(...registerables);
  }

  updates(inputs:ResponseInputs[], year:Number ){
    for(let i=0; i<12; i++){
      this.data[i] = {input:0, output:0}
    }
    for(let item of inputs){
      let [ano,mes] = item.date.split('-');
      
      if(Number(ano) == year){
        if(typeof this.data[Number(mes)-1] != 'undefined'){
          item.output ? this.data[Number(mes)-1].output += item.value : this.data[Number(mes)-1].input += item.value ;
          continue;
        }
        this.data[Number(mes)-1] = {input: item.output ? 0 : item.value, output: item.output? item.value : 0}
      }
    }
    this.chart.destroy();
    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Entradas',
              data: this.data.map(item=> Number(item.input)),
              backgroundColor: "#26b149b4",
              borderColor: "#26b149b4",
              //fill: true,
          },
          {
            label: 'Saídas',
            data: this.data.map(item=> Number(item.output)),
            backgroundColor: "#881f36",
            borderColor: "#007ee7",
            //fill: true,
        }],
          labels: this.meses.map(item=>item.value)
      },
  });
  }

  ngOnInit(): void {
    this.inputService.getInputs(Number(this.authService.user?.id)).subscribe(res=>{
      this.inputs = res;
      this.updates(this.inputs, 2021);
    });

  }


  meses: Mes[] = [
    {value: 'Janeiro', viewValue: 'Janeiro'},
    {value: 'Fevereiro', viewValue: 'Fevereiro'},
    {value: 'Março', viewValue:  'Março'},
    {value: 'Abril', viewValue: 'Abril'},
    {value: 'Maio', viewValue: 'Maio'},
    {value: 'Junho', viewValue: 'Junho'},
    {value: 'Julho', viewValue: 'Julho'},
    {value: 'Agosto', viewValue: 'Agosto'},
    {value: 'Setembro', viewValue: 'Setembro'},
    {value: 'Outubro', viewValue: 'Outubro'},
    {value: 'Novembro', viewValue: 'Novembro'},
    {value: 'Dezembro', viewValue: 'Dezembro'},
  ];

  anos:Ano[] = [
   
    {value:2020, viewValue:'2020'},
    {value:2021, viewValue:'2021'},
  ]
  canvas: any;
  ctx: any;
  chart: any
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Entradas',
              data: this.data.map(item=> Number(item.input)),
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              
            
          },

          {
            label: 'Saídas',
            data: [0,1,2,3,5,4,96,6,7,8,9,4,10],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            
        }],
        labels: this.meses.map(item=>item.value)      },
  });
  }
  
  
}
