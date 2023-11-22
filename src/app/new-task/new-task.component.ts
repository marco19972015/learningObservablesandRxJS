import { Component, inject } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  // assigns the new task from out template. 
  newTask: string = '';

  // dependency injection on our property
  constructor(private taskService: TaskService){}


  // click event on our button
  onCreateTask(){
    // emit the value from the newTask
    this.taskService.onCreateTask(this.newTask)
  }
}
