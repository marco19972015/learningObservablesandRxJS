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
  data: number[] = [];

  // to append the unsubscribe method
  subscriber1: any;

  OnSubscribe(){
    // subscribe and handle the data through callback
    this.subscriber1 = this.counter.subscribe((val) => {
      // push value being emitted into data array
      this.data.push(val);
    });
  }

  OnUnsubscribe(){
    // we want to unsub from the counter observable
    this.subscriber1.unsubscribe();
  }
}
