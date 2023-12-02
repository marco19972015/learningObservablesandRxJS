import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit{
  ngOnInit(){
    
    const subject = new ReplaySubject();

    // The past values will be emitted in the new subscribers
    subject.next(100);
    subject.next(200);
    subject.next(300);

    // Subscriber 1 (at run 1 subject = 100, 200, 300) (second run subject = 2020)
    subject.subscribe((data) => {console.log('Subscriber 1: ' + data);})

    // Subscriber 2 (at run 1 subject = 100, 200, 300) (second run subject = 2020)
    subject.subscribe((data) => {console.log('Subscriber 2: ' + data);})

    subject.next(2020);

    // Subscriber 3 (at run 1 subject = 100, 200, 300) (second run subject = 2020)
    subject.subscribe((data) => {console.log('Subscriber 3: ' + data);})

    // At this line (subject = 2023, 2023, 2023)
    subject.next(2023)
  }
}
