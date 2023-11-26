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
  taskService: TaskService = inject(TaskService)


  // click event on our button
  onCreateTask(){
    // emit the value from the newTask
    // 1. Assign the property that becomesn an obervable
    this.taskService.onCreateTask(this.newTask)
  }
}
