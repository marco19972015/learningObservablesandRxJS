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
    // Promise vs Observables

    // a promise does not need to be imported 
    const promise = new Promise((resolve, reject) => {
      // code below gets executed immediately since a promise ALWAYS returns some data
      console.log('Promise is called');
      resolve(100);

      // Promise won't emit these values 
      resolve(200);
      resolve(300);
    })

    // recieves data from what is emitted from Promise callback function
    promise.then((data) => {
      console.log(data);
    })

    // Observable needs to be imported from RxJS library
    const obs = new Observable((data) => {
      // code below needs a subscriber to emit (lazy)
      console.log('Observable is called');
      
      // We can emit all the values below 
      data.next(200);
      data.next(300);
      data.next(400);
    });

    // when there is a subscriber our callback function in the observable will be executed
    obs.subscribe((data) => {
      console.log(data);
    });


  }
}
