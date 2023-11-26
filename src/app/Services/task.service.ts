import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    // 2. create the observable
    CreateTask = new Subject<string>();

    onCreateTask(value: string){
        // 3. emit value using the next event
        this.CreateTask.next(value)
    }
}