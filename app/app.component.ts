import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { TasksComponent } from './tasks-component/tasks.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
@Component({
  selector: 'my-app',
  // templateUrl: 'app/app.component.html',
  template: `<h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Tasks']">Tasks</a>
  </nav>
  <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES, TasksComponent],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksComponent
  },
  // {
  //   path: '/detail/:id',
  //   name: 'HeroDetailComponent',
  //   component: HeroDetailComponent
  // }
])

export class AppComponent {
  title = 'Recent tasks'

}
