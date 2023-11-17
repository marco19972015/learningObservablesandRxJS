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
    // etTimeout(()=> { observer.error(new Error('Something went wrong. Please try again later')); }, 3000);
    // Code below will not run
    setTimeout(()=> { observer.next(4); }, 4000);
    setTimeout(()=> { observer.next(5); }, 5000);
    // Once this complete method is emitted anything after it won't be emitted
    setTimeout(()=> { observer.complete(); }, 6000);  // signals all the data from the stream has been emitted
  })  

  GetAsynchData(){
    // // next, error, complete
    // this.myObservable.subscribe((val: any) => {  // function handler
    //   this.data.push(val); 
    // }, (err) => {  // Recieves the error object
    //   alert(err.message)  // In the error object we have a prop called message we can use (custom mess created)
    // },
    // () => {  // When the complete signal is emitted we can call this third callback function
    //   alert('All data has been streamed')
    // });

    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val)
      },
      error(err){
        alert(err.message)
      },
      complete(){
        alert('All the data is streamed!')
      }
    })
  }
}
