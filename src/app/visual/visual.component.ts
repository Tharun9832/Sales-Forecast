import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {

  labels: string[] = [];
  chartData: number[] = [];

  constructor(private dataHandler: DataHandlerService, private router: Router) { }

  ngOnInit(): void {
    this.dataHandler.getData().subscribe(data => {

      if (!data) {
        this.router.navigate(['data-input'])
      }

      const list: string[] = data.split('\n')
      list.splice(0, 1)
      for (let item of list) {
        if (item === "") {
          continue
        }
        const splitList: string[] = item.split(',')
        const date = splitList[1]
        const sales = splitList[2].replace('\r', '')
        this.labels.push(date)
        this.chartData.push(parseFloat(sales))
      }
    });

    console.log(this.labels);
    console.log(this.chartData);
    
    
  }

  lineChartData = {
    labels: this.labels,
    datasets: [
      {
        data: this.chartData,
        label: 'Sales',
        fill: true
      }
    ]
  }

}