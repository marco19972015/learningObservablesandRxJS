import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit{
  ngOnInit(){
    // 1. AsyncSubject is going to emit the last emitted value to all its subscribers
    // it will pass the last emitted value to all its subscribers after the COMPLETE METHOD IS CALLED on that async subject
    // 2. We can also call the complete method after calling a subscriber

    // use new keyword to call the constructor of AsyncSubject class
    const asyncSubject = new AsyncSubject();

    // we can call the next method to emit a value
    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);

    // allows the value to reach the subscribers
    // asyncSubject.complete();
    
    // Create a subscriber for our asyncSubject, which gets the last emitted value
    asyncSubject.subscribe((data) => console.log(`Subscriber 1: ${data}`))
    asyncSubject.subscribe((data) => console.log(`Subscriber 2: ${data}`))


    asyncSubject.complete();

    // AsyncSubject always emits a single value (the last emitted value before the complete method is called)
  }
}
