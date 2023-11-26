import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit{
  tasks: string[] = ['Get some fruits to snack on.',
                     'Add more notes to my Django app.', 
                     'Go for a walk at some point.'];

  // DP injection
  taskService: TaskService = inject(TaskService)


  ngOnInit(){
    // 4. subscribe to that event
    this.taskService.CreateTask.subscribe((value: any) => {
      // 5. recieve the value through a callback function. 
      this.tasks.push(value);
    })
  }

}
