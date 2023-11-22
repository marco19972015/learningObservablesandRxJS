import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    // Create the Observable
    CreateTask = new Subject<string>();

    onCreateTask(value: string){
        // emit the value from our Subject using next method
        this.CreateTask.next(value)
    }
}