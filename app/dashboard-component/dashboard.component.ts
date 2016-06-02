import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router-deprecated';
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard-component/dashboard.component.html',
  providers: [ TaskService ]
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private taskService: TaskService) { }
  tasks: Task[] = [];
  ngOnInit() {
    this.taskService.getTasks()
      .then(tasks => this.tasks = tasks);
      
  }
  gotoDetail(task: Task) {
    let link = ['TaskDetail', { id: task.id }];
    this.router.navigate(link);
  }
}
