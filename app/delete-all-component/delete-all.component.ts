import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-delete-all',
  templateUrl: 'app/delete-all-component/delete-all.component.html',
  providers: [ TaskService ]
})

export class DeleteAllComponent implements OnInit {
    
    constructor(
    private router: Router,
    private taskService: TaskService) { }
    
    tasks: Task[] = [];
    
    ngOnInit() {
    this.taskService.getTasks()
      .then(tasks => this.tasks = tasks);
    }
    
    deleteAll() {
        for(var _task of this.tasks) {
            _task.deleted = true;
        }
        alert("deleted")
    }
}