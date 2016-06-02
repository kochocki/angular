import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
@Component({
  selector: 'my-tasks',
  templateUrl: 'app/tasks-component/tasks.component.html',
  providers: [ROUTER_PROVIDERS, TaskService]
})

export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  public tasks: Task[];

  selectedTask: Task;
  onSelect(task: Task) { this.selectedTask = task; }

  getTasks() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }
}
