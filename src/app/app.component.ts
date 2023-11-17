import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  data: any[] = [];

  // Observable
  myObservable = new Observable((observer) =>{
    // 1 mili-seconds or 1 second (exmaple of data stream) 
    setTimeout(()=> { observer.next(1); }, 1000);
    setTimeout(()=> { observer.next(2); }, 2000);
    setTimeout(()=> { observer.next(3); }, 3000);
    // Emit an error using Error class
    // setTimeout(()=> { observer.error(new Error('Something went wrong. Please try again later')); }, 3000);
    // Code below will not run
    setTimeout(()=> { observer.next(4); }, 4000);
    setTimeout(()=> { observer.next(5); }, 5000);
    // Once this complete method is emitted anything after it won't be emitted
    setTimeout(()=> { observer.complete(); }, 6000);  // signals all the data from the stream has been emitted
  })  

  GetAsynchData(){
    // Subscribe to the observable
    this.myObservable.subscribe({  // create an object 
      // specify the function name (next) and specify the value
      next: (val: any) => {    // we use arrow function to get (this) keyword from outer scope
        this.data.push(val);  // (this) keyword initially points to instance of the .subscribe function
      },  // use comma to add to the object
      error(err){  // the function name is error with an err object
        alert(err.message);  
      },  // third callback function is complete
      complete(){
        alert('All the data is streamed!');
      }
    })
  }
}
