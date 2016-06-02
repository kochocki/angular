import { TaskService } from '../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Task } from '../task';

@Component({
  selector: 'my-add',
  styleUrls: [ 'app/add-task-component/style.css' ],
  templateUrl: 'app/add-task-component/add-task.component.html',
  providers: [ TaskService ]
})

export class AddTaskComponent implements OnInit {
  constructor(
    private router: Router,
    private taskService: TaskService) { }
  
  tasks: Task[] = [];
  
  ngOnInit() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
    
  }

  title: string;
  finishDate: string;
  content: string;
  done: boolean = false;
  
  addNewTask() {
      var newTask = new Task(this.tasks[this.tasks.length-1].id+1, this.title, this.finishDate, this.content, this.done, false);
      console.log(this.finishDate)
      this.tasks.push(newTask);
  }
}
