import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, map, of } from 'rxjs';

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

  // myObservable emitting - 2, 4, 6, 8, 10;
  // results - 10, 20, 30, 40, 50
  myObservable = from([2, 4, 6, 8, 10]);

  // transform is an observable
  // val comes from myObservable ex. first 2, second 4, third 6 ...
  transformObs = this.myObservable.pipe(map((val) => {  // inside callback we can pass the data to transform it
    return val * 10;
  }))

  GetAsynchData(){
    this.transformObs.subscribe({  
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
