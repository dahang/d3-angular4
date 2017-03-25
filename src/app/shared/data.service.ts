import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from '@reactivex/rxjs';

import * as _ from 'lodash';

import {Data} from './data.model';

@Injectable()
export class DataService {
    private dataUrl: string = '';
    private chartData: Array<any>;
    constructor() { }

    generateData(): Array<any> {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
    return this.chartData;
  }

//   getLastNDaysData(n: number): <IData> {

//     return  _.time(_.random(100), (data: IData) => {
//          data<IData>.time = _.now();
//          data<IData>.value = _.random(50, 999);
//          return data;
//       });
//     }
}
