import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-tasks',
  templateUrl: 'app/tasks-component/tasks.component.html',
  providers: [TaskService]
})

export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService,
              private router: Router) { }
  tasks: Task[];

  getTasks() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }
  
  gotoDetail(task: Task) {
    console.log("tu jestem");
    let link = ['TaskDetails', { id: task.id }];
    this.router.navigate(link);
  }
}
