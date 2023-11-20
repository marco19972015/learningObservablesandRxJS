import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'observables';
  data: any[] = [];


  // Get the btn element reference from our view
  @ViewChild('createbtn')
  createbtn: ElementRef | undefined;

  // create the button observable prop as global
  createBtnObs: any;


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
  // myObservable = of(this.array1, this.array2, 20 , 30, 'hello', true);

  // each element of an ITTERABLE is emitted/streams one after the other 
  // myObservable = from('123456789');

  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  })

  myObservable = from(this.promiseData);

  GetAsynchData(){
    this.myObservable.subscribe({  
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

  // Will be our method that tracks our button and handles the observable
  buttonClicked() {
    let count = 0;  // counter 

    // first argument is the target element 
    // second arument is the event which we want to listen on that target element

    // after creating the observable we can subscribe and assign it to a property/observer
    this.createBtnObs = fromEvent(this.createbtn?.nativeElement, 'click')  // this line will return an observable
                        .subscribe((data) => {  // our handler for the observable/incoming data
                          console.log(data);
                          // call the showItem method
                          this.showItem(++count);  // pass the counter               
                        });  
  }

  // Call the ngAfterViewInit LCH, because it will be called when the view of this component is fully initialized
  // call it after we interact with it, don't call it before hand
  ngAfterViewInit(){
    this.buttonClicked();  // call our buttonClicked method
  }

  // JS code that will create an element in DOM
  showItem(val: number) {
    // we access the DOM and create a div, assign that to a property
    let div = document.createElement('div');
    div.innerText = 'Item' + val;  // we add a text inside that created element
    div.className = 'data-list';
    document.getElementById('container')?.appendChild(div);  // append the child element 
  }
}
