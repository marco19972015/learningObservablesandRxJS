import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  data: any[] = [];

  array1 = [1, 3, 5, 7, 9];
  array2 = ['A', 'B', 'C', 'D'];



  // Observable
  // myObservable = new Observable((observer) =>{
  //   setTimeout(()=> { observer.next(1); }, 1000);
  //   setTimeout(()=> { observer.next(2); }, 2000);
  //   setTimeout(()=> { observer.next(3); }, 3000);
  //   // Emit an error using Error class
  //   // setTimeout(()=> { observer.error(new Error('Something went wrong. Please try again later')); }, 3000);
  //   setTimeout(()=> { observer.next(4); }, 4000);
  //   setTimeout(()=> { observer.next(5); }, 5000);
  //   setTimeout(()=> { observer.complete(); }, 6000);  // signals all the data from the stream has been emitted
  // })  

  // Creating an observable using the of operator 
  // All the values will be streamed one after the other
  // After all the data is streamed, the of operator will emit the complete signal
  myObservable = of(this.array1, this.array2, 20 , 30, 'hello', true);
 
  // NOTE that the array is being emitted in its entirety. It is not being emitted one value at a time 

  GetAsynchData(){
    // Subscribe to the observable
    this.myObservable.subscribe({  
      next: (val: any) => {    
        this.data.push(val);  
        console.log(val);
      },  
      error(err){  
        alert(err.message);  
      },  
      complete(){  // Complete signal is auto emitted
        alert('All the data is streamed!');
      }
    })
  }
}
