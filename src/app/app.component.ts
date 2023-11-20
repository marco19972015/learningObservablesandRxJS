import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  data: any[] = [];

  // Each operator in RxJS is a method/function
  // map = function/method

  // Using map operator we can transform data emitted by an observable
  // to a map operator we need to pass a callback function that returns an observable

  // filter operator is used to filter data emitted by a source observable based on a given condition

  // If we want to use an operator on an observable we have to use the pipe method
  // pipe allows us to change RxJS operators 

  // myObservable emitting - 2, 4, 6, 8, 10;
  // results - 10, 20, 30, 40, 50, 60
  myObservable = from([2, 4, 6, 8, 10, 12]);

  // transformObs is an observable - 10, 20, 30, 40, 60
  // val comes from myObservable ex. first 2, second 4, third 6 ...
  transformObs = this.myObservable.pipe(map((val) => {  // inside callback we can pass the data to transform it
    return val * 5;
  }))

  // Now we filter based on a condition (divisible by 4) - 20, 40, 60
  filterObs = this.transformObs.pipe(filter((val) => {
    // filter returns a boolean!
    return val % 4 === 0;
  }))


  GetAsynchData(){
    this.filterObs.subscribe({  
      next: (val: any) => {    
        this.data.push(val);  
        console.log(val);
      },  
      error(err){  
        alert(err.message);  
      },  
      complete(){  
        alert('All the data is streamed!');
      }
    })
  }
}
