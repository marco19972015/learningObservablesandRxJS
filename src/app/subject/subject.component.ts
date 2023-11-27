import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit{
  ngOnInit(){

    // the Subject observable does not accept any hard coded values
    // const subject = new Subject();

    // Now we can pass an initial value that emits once there is a subscriber
    const subject = new BehaviorSubject<number>(100);

    // Subscriber 1 (at run time data = 100) then (data = 2020)
    subject.subscribe((data) => {console.log(data);})

    // Subscriber 2 (at run time data = 100) then (data = 2020)
    subject.subscribe((data) => {console.log(data);})

    // Once the first code runs the 2 subscribers will recieve the value 2020
    subject.next(2020);

    // Subscriber 3 (at run time data = 2020 [last emitted value])
    subject.subscribe((data) => {console.log(data);})

    // 2023 will be emitted three times, since we subscribed 3 times
    subject.next(2023);




    // // Create an instance of a subject observable
    // const subject = new Subject();

    // // AJAX Call (GET request) ajax method returns an observable
    // const data = ajax('https://randomuser.me/api/')

    // // In our waterfall we will see three request made (Observable = unicast)
    // subject.subscribe((res) => {console.log(res);})
    // subject.subscribe((res) => {console.log(res);})
    // subject.subscribe((res) => {console.log(res);})

    // // In this instance subject is now a consumer of a value.
    // // where the ajax method returns an observable
    // // and subject consumes that observable and converts it into a subject 
    // // and passes the same data to all the subscribers
    // data.subscribe(subject);
  }
}
