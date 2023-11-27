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

    // AJAX Call  (GET request) ajax method returns an observable
    const data = ajax('https://randomuser.me/api/')

    // In our waterfall we will see three request made (Observable = unicast)
    data.subscribe((res) => {console.log(res);})
    data.subscribe((res) => {console.log(res);})
    data.subscribe((res) => {console.log(res);})
  }
}
