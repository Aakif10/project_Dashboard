import { Component, Input, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() label:string | undefined;
  @Input() total:string | undefined;
  @Input() percentage:string | undefined;


  Highcharts=Highcharts;
  chartOptions!: {};

  constructor() { }

    ngOnInit() {
      this.chartOptions={
        chart: {
          type: 'area'
        },
        title: {
          text: null
        },
        subtitle: {
          text: null
        },
        xAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        yAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        tooltip: {
          split: true,
          valueSuffix: ' millions'
        },
        credits:{
        enabled:false
          },
        exporting:{
        enabled:false
          },
        series: [ {
          data: [71,78,39,66]
          }]
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
    window.dispatchEvent(
      new Event ("resize")
    );
    }, 300);

  }

}



