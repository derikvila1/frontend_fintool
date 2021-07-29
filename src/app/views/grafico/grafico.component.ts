import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

interface Mes {
  value: string;
  viewValue: string;
}
interface Ano {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})


export class GraficoComponent implements OnInit {
  constructor() { 
    Chart.register(...registerables);
  }
    
  ngOnInit(): void {}

  selectedValue: string | undefined;
  selectedValue2: string | undefined;


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
    {value:'2017', viewValue:'2017'},
    {value:'2018', viewValue:'2018'},
    {value:'2019', viewValue:'2019'},
    {value:'2020', viewValue:'2020'},
    {value:'2021', viewValue:'2021'},
  ]
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: [10, 15, 30, 50],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
            
          },

          {
            label: 'Invested Amount',
            data: [20, 20, 40, 60, 80],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            
        }],
          labels: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',]
      },
  });
  }
  
  
}
