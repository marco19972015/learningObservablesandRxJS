import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit{
  ngOnInit(){

    // Here we can see that subject is 'multicast' since it emits the same value
    // for all the subscribers
    const subject = new Subject();

    // Subscriber 1
    subject.subscribe((data) => {console.log(data);})

    // Subscriber 2
    subject.subscribe((data) => {console.log(data);})



    subject.next(Math.random());

    // The reason for calling the subscribe method before the next method is to ensure that
    // the subscribers are registered with the subject before any data is emitted. When we 
    // call the next, it emits a new value to all the registered subscribers. If we were to call
    // the next method before adding the subscribers, the emitted value would not have any subscribers to receive
    // and handle it.

    // We want to set up our subscriptions before triggering any events. 



      // Note, an observable always provides a data (so it emits some data)
    //       a subject can be a data provider as well as a data consumer

  }
}
