import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';

}
