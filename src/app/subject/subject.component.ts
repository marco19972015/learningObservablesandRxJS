import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit{
  ngOnInit(){

    // Create an instance of a subject observable
    const subject = new Subject();

    // AJAX Call (GET request) ajax method returns an observable
    const data = ajax('https://randomuser.me/api/')

    // In our waterfall we will see three request made (Observable = unicast)
    subject.subscribe((res) => {console.log(res);})
    subject.subscribe((res) => {console.log(res);})
    subject.subscribe((res) => {console.log(res);})

    // In this instance subject is now a consumer of a value.
    // where the ajax method returns an observable
    // and subject consumes that observable and converts it into a subject 
    // and passes the same data to all the subscribers
    data.subscribe(subject);
  }
}
