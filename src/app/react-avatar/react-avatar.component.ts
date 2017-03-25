import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from '@reactivex/rxjs';

@Component({
  selector: 'app-react-avatar',
  templateUrl: './react-avatar.component.html',
  styleUrls: ['./react-avatar.component.css']
})
export class ReactAvatarComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }

  ngOnInit() {
    let source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
    let result = source.map(x => parseInt(x)).filter(x => !isNaN(x))
      .reduce((x, y) => x + y);

    console.log(result);
  }

  ngOnChanges() {

  }

  ngOnDestroy() {
    console.log('unsubscribe');

  }

}
