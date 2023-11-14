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
    setTimeout(()=> { observer.next(4); }, 4000);
    setTimeout(()=> { observer.next(5); }, 5000);
  })  

  GetAsynchData(){
    // Observer/subscriber [this.myObservable.subscribe]
    this.myObservable.subscribe((val: any) => {
      this.data.push(val); // the call back function is the handler
    });
  }



  percentage: string = '-17'


  methodChangeType() {
    console.log(this.percentage);
    let numType = +this.percentage
    console.log(numType);
  }
}
