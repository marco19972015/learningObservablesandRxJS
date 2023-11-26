import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit{
  ngOnInit(){

    // The example bellow shows how an Observable is unicast.
    // It does not emit the same value for all its subscribers

    // Emit a random number and from our obs observable
    let obs = new Observable((observer) => {observer.next(Math.random())})

    // Subscriber 1
    obs.subscribe((data) => {console.log(data);})

    // Subscriber 2
    obs.subscribe((data) => {console.log(data);})
  }
}
