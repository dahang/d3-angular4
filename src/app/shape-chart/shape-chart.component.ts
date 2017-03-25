import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { Observable, Subscription } from '@reactivex/rxjs';

import { IPrice } from '../shared/data.model';

@Component({
  selector: 'app-shape-chart',
  templateUrl: './shape-chart.component.html',
  styleUrls: ['./shape-chart.component.css']
})

export class ShapeChartComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private dataSource: Array<any>;

  private margin: any = { top: 40, bottom: 20, left: 50, right: 50 };
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;
  private observer: Observable<number>;
  private subscription: Subscription;
  private interpolateTypes: Array<any>;
  private parseDate: any;


  constructor() {
    this.dataSource = [{ x: 5, y: 5 }, { x: 10, y: 15 }, { x: 20, y: 7 }, { x: 30, y: 18 }, { x: 40, y: 10 }];
    this.interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle, d3.curveCardinal];
    this.parseDate = d3.timeParse('%m/%d/%Y');
  }

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }

  createChart(): void {

    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    d3.csv('../../assets/price.csv')
      .row((d: any) => { return { month: this.parseDate(d.month), price: (d.price.trim().slice(1)) }; })
      .get((error, data) => {
        let max = d3.max(data, (d: IPrice) => { return d.price; });
        let minDate: Date = d3.min(data, (d: IPrice) => { return d.month; });
        let maxDate: Date = d3.max(data, (d: IPrice) => { return d.month; });

        let y = d3.scaleLinear()
          .domain([0, max])
          .range([this.height, 0]);

        let x = d3.scaleTime()
          .domain([minDate, maxDate])
          .range([0, this.width]);

        this.yAxis = d3.axisLeft(y);
        this.xAxis = d3.axisBottom(x);
        let svg = d3.select(element).append('svg')
          .attr('width', element.offsetWidth)
          .attr('height', element.offsetHeight);

        let chartGroup = svg.append('g')
          .attr('class', 'group').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        let line = d3.line()
          .x((d: any) => { return x(<Date>d.month); })
          .y((d: any) => { return y(<number>d.price); });
        // .curve(this.interpolateTypes[2]);

        chartGroup.append('path')
          .attr('fill', 'none')
          .attr('stroke', 'blue')
          .attr('d', line(data));

        chartGroup.append('g').attr('class', 'x axis').call(this.xAxis);
        chartGroup.append('g').attr('class', 'y axis').call(this.yAxis);
      });
  }
}
