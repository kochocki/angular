import { Injectable } from '@angular/core';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {
  getTasks() {
    return Promise.resolve(TASKS);
  }

  getTask(id: number) {
    return Promise.resolve(TASKS).then(
      tasks => tasks.filter(task => task.id === id)[0]
    );
  }
}
