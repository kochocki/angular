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
    let link = ['TaskDetails', { id: task.id }];
    this.router.navigate(link);
  }
  
  getActualDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    console.log(dd+'/'+mm+'/'+yyyy);
    return dd+'/'+mm+'/'+yyyy;
  }
}
