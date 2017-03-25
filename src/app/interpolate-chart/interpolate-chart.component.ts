import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { Observable, Subscription } from '@reactivex/rxjs';
import { DataService } from '../shared/data.service';


export interface IMlsData extends d3.DSVRowString {
  Date: string;
  Composite_HPI: string;
  Single_Family_HPI: string;
  One_Storey_HPI: string;
  Two_Storey_HPI: string;
  Townhouse_HPI: string;
  Apartment_HPI: string;
  Composite_Benchmark: string;
  Single_Family_Benchmark: string;
  One_Storey_Benchmark: string;
  Two_Storey_Benchmark: string;
  Townhouse_Benchmark: string;
  Apartment_Benchmark: string;
}

@Component({
  selector: 'app-interpolate-chart',
  templateUrl: './interpolate-chart.component.html',
  styleUrls: ['./interpolate-chart.component.css']
})

export class InterpolateChartComponent implements OnInit {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private dataSource: Array<number>;

  private margin: any = { top: 40, bottom: 40, left: 40, right: 40 };
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;
  private line: any;
  private observer: Observable<number>;
  private subscription: Subscription;

  private benchmark: boolean;
  private hpi: boolean;

  private startDate = 'Jan 2005';
  private endDate = 'Feb 2017';
  private city = 'toronto';

  private data: d3.DSVParsedArray<IMlsData>;

  constructor(private dataService: DataService) {
    // this.height = 200;
    // this.width = 500;
  }

  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(): void {
  }

  ngOnDestroy(): void {

  }
  getData(): void {
    // this.dataSource = this.dataService.generateData();
  }

  createChart(): void {
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    this.yScale = d3.scaleLinear()
      .range([this.height, 0])
      .nice();

    this.xScale = d3.scaleLinear()
      .range([0, this.width]);

    this.yAxis = d3.axisLeft(this.yScale);
    this.xAxis = d3.axisBottom(this.xScale);

    d3.csv('../../assets/toronto.csv', (error, data: d3.DSVParsedArray<IMlsData>) => {
      if (error) { throw error; };
      this.data = data;
      data.forEach((d: IMlsData) => {
        console.log(d);
        d.Date = d.Date;
        // d.Composite_HPI_n = + d.Composite_HPI;
        // d.Single_Family_HPI = + d.Single_Family_HPI;
        // d.One_Storey_HPI = + d.One_Storey_HPI;
        // d.Two_Storey_HPI = +d.Two_Storey_HPI;
        // d.Townhouse_HPI = + d.Townhouse_HPI;
        // d.Apartment_HPI = + d.Apartment_HPI;
        // d.Composite_Benchmark = + d.Composite_Benchmark;
        // d.Single_Family_Benchmark = + d.Single_Family_Benchmark;
        // d.One_Storey_Benchmark = + d.One_Storey_Benchmark;
        // d.Two_Storey_Benchmark = + d.Townhouse_Benchmark;
        // d.Townhouse_Benchmark = + d.Townhouse_Benchmark;
        // d.Apartment_Benchmark = + d.Apartment_Benchmark;
      });
    });
    // this.xScale.domain(d3.extent(<any>this.data, (d: IMlsData) => {
    //   return d.Date;
    // }));
    // this.yScale.domain(d3.extent(<any>this.data, (d: IMlsData) => {
    //   return +d.Composite_HPI;
    // }));

    // this.line = d3.line()
    // .x((d) => { return this.xScale(d); })
    // .y((d) => { return this.yScale(d); });

    this.chart = d3.select(element).append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.height + this.margin.bottom + ')')
      .call(this.xAxis);

    this.chart.append('g')
      .attr('class', 'y axis')
      .call(this.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');

    // this.chart.append('path')
    //   .datum(this.data)
    //   .attr('class', 'line')
    //   .attr('d', this.line);
  }

}
