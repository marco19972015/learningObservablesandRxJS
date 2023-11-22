import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {
  tasks: string[] = ['Get some fruits to snack on.',
                     'Add more notes to my Django app.', 
                     'Go for a walk at some point.'];

  constructor(private taskService: TaskService){}


  ngOnInit(){
    this.taskService.CreateTask.subscribe((value: any) => {
      this.tasks.push(value);
    })
  }

}
