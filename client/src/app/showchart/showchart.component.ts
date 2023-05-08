import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-showchart',
  templateUrl: './showchart.component.html',
  styleUrls: ['./showchart.component.scss'],
})
export class ShowchartComponent implements OnInit {
  chart: any;
  constructor() {}
  ngOnInit(): void {}

  chartOptions = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Product sales',
    },
    axisX: {
      valueFormatString: 'MMM',
      intervalType: 'month',
      interval: 1,
    },
    axisY: {
      title: 'Number of product sold',
      suffix: '',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: function (e: any) {
        if (
          typeof e.dataSeries.visible === 'undefined' ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      },
    },
    data: [
      {
        type: 'line',
        name: 'quantity',
        showInLegend: true,
        yValueFormatString: '',
        dataPoints: [
          { x: new Date(2021, 0, 1), y: 3 },
          { x: new Date(2021, 1, 1), y: 2 },
          { x: new Date(2021, 2, 1), y: 6 },
          { x: new Date(2021, 2, 5), y: 4 },
          { x: new Date(2021, 3, 1), y: 5 },
          { x: new Date(2021, 4, 1), y: 4 },
          { x: new Date(2021, 5, 1), y: 6 },
          { x: new Date(2021, 6, 1), y: 9 },
          { x: new Date(2021, 7, 1), y: 8 },
          { x: new Date(2021, 8, 1), y: 1 },
          { x: new Date(2021, 9, 1), y: 2 },
          { x: new Date(2021, 10, 1), y: 1 },
          { x: new Date(2021, 11, 1), y: 3 },
        ],
      },
    ],
  };
}
