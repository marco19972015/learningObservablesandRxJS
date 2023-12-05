import { Component } from '@angular/core';
import { Subscribable, Subscriber, interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
  // After each second interval function will emit a number sequentially (returns an observable)
  counter = interval(1000);

  // Hold the data being emitted
  data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [];

  // to append the unsubscribe method
  subscriber1: any;
  subscriber2: any;
  subscriber3: any;

  OnSubscribe1(){
    // subscribe and handle the data through callback
    this.subscriber1 = this.counter.subscribe((val) => {
      // push value being emitted into data array
      this.data1.push(val);
    });
  }

  OnSubscribe2(){
    this.subscriber2 = this.counter.subscribe((val) => {
      this.data2.push(val);
    });
  }

  OnSubscribe3(){
    this.subscriber3 = this.counter.subscribe((val) => {
      this.data3.push(val);
    });
  }

  OnUnsubscribe1(){
    // we want to unsub from the counter observable
    this.subscriber1.unsubscribe();
  }

  OnUnsubscribe2(){
    this.subscriber2.unsubscribe();
  }

  OnUnsubscribe3(){
    this.subscriber3.unsubscribe();
  }
}
