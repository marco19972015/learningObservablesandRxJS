import { Component } from '@angular/core';
// gets installed when we create an ng application
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Goal, when the button is clicked we want to subscribe the observable (myObservable)
  // And whatever value that is recieved we want to insert it inside the data array

  title = 'observables';

  data: any[] = [];


  // 1. we create an observable to do that we need to call the Constructor of Observable
  // 2. we assigned the object returned from the observable to a property 
  // 3. we need to make the observable EMIT some data [so we pass a callback function]
  //    This callback function takes in an argument (it can be named anything)
  //    this argument will be injected by  RxJS library 
  //    It can be seen as the subscriber 

  // whenever new data emits from myObservable, the code in the getAsynch method will be notified
  // Observable
  myObservable = new Observable((observer) =>{ // Observable is imported from RxJS library 
    // observer is going to recieve all the subscribers that are subscribed to the myObservable property

    // 4. If we want to emit some value we need to call next method on the Observer
    observer.next([1, 2, 3, 4, 5]);  // 5. myObservable will emit the data inside the next method
  })  

  // 6. The first thing we are going to do is Subscribe to this observable using subscribe method
  GetAsynchData(){
    // Observer
    // this subscribe method takes 3 call back functions [next, error, complete]
    // next function gets executed whenever the observable emits next event
    // error call back function gets called whenever the observable emits the error event
    // complete CB function gets called whenever the observable emits the complete event
    this.myObservable.subscribe((val: any) => { // val will get the array in next method
      this.data = val;  // set value (array coming in)  to empty array
    });
  }
}
