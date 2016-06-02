import { Component, Input, OnInit  } from '@angular/core';
import { Task } from '../task';
import { RouteParams } from '@angular/router-deprecated';
import { TaskService } from '../task.service';

@Component({
  selector: 'my-task-details',
  templateUrl: 'app/task-details-component/task-details.component.html',
  providers: [ TaskService ]
})
export class TaskDetailsComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private routeParams: RouteParams) { console.log("tu tez")}
  task: Task;
  

  ngOnInit() {
    console.log("tu tez")
    let id = +this.routeParams.get('id');
    this.taskService.getTask(id)
      .then(task => this.task = task);
  }
}
