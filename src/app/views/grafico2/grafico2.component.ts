import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ResponseInputs } from '../inputs/input.model';
import { InputService } from '../inputs/input.service';
import { AuthService } from '../login/auth.service';

interface Mes {
  value: number;
  viewValue: string;
}
interface Ano {
  value: number;
  viewValue: string;
}



@Component({
  selector: 'app-grafico2',
  templateUrl: './grafico2.component.html',
  styleUrls: ['./grafico2.component.css']
})


export class Grafico2Component implements OnInit {

  inputs: ResponseInputs[] = [];
  data:{input:number, output:number}[] = [];
  year:Number = 2021;

  selectedYear:number = 2021;
  selectedMonth:number = 0;
  constructor(private inputService: InputService, private authService: AuthService) { 
    Chart.register(...registerables);
  }
  updatesMonth(){
    this.chart.destroy();
    this.chart = new Chart(this.ctx, {
      type: 'bar',
      options:{
        indexAxis: 'y'
      },
      data: {
        
        datasets: [{
          label: 'Entradas',
          data: [this.data[this.selectedMonth].input],
          backgroundColor: "#26b149b4",
          borderColor: "#007ee7",
          //fill: true,
        },
        {
          label: 'Saídas',
          data: [this.data[this.selectedMonth].output],
          backgroundColor: "#881f36",
          borderColor: "#007ee7",
          //fill: true,
        },
        {
          label: 'Saldo',
          data: [(this.data[this.selectedMonth].input)-(this.data[this.selectedMonth].output)],
          backgroundColor: "#156",
          borderColor: "#007ee7",
          //fill: true,
        }
        
      ],
      labels: [this.meses[this.selectedMonth].viewValue]
    },
  });
  if((this.data[this.selectedMonth].input)-(this.data[this.selectedMonth].output) < 0){
    alert("Seu saldo neste mês foi negativo")
  }
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
    this.updatesMonth()
  }

  ngOnInit(): void {
    this.inputService.getInputs(Number(this.authService.user?.id)).subscribe(res=>{
      this.inputs = res;
      this.updates(this.inputs, 2021);
    });

  }

  meses: Mes[] = [
    {value: 0, viewValue: 'Janeiro'},
    {value: 1, viewValue: 'Fevereiro'},
    {value: 2, viewValue:  'Março'},
    {value: 3, viewValue: 'Abril'},
    {value: 4, viewValue: 'Maio'},
    {value: 5, viewValue: 'Junho'},
    {value: 6, viewValue: 'Julho'},
    {value: 7, viewValue: 'Agosto'},
    {value: 8, viewValue: 'Setembro'},
    {value: 9, viewValue: 'Outubro'},
    {value: 10, viewValue: 'Novembro'},
    {value: 11, viewValue: 'Dezembro'},
   
  ];

  anos:Ano[] = [
    {value:2020, viewValue:'2020'},
    {value:2021, viewValue:'2021'},
  ]


  
  canvas: any;
  ctx: any;
  chart: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    
    this.chart = new Chart(this.ctx, {
      type: 'bar',
      options:{
        indexAxis: 'y'
      },
      data: {

        datasets: [{
            label: 'Entradas',
            data: [0],
            backgroundColor: "rgb(115 185 243 / 65%)",
            borderColor: "#007ee7",
            //fill: true,
        },
        {
          label: 'Saídas',
          data: [0],
          backgroundColor: "#47a0e8",
          borderColor: "#007ee7",
          //fill: true,
      }],
        labels: [this.meses[this.selectedMonth].viewValue]
      },
  });
  
  }
  
  
}
