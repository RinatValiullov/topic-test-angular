import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerTodoComponent } from './container-todo/container-todo.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './todo/header/header.component';
// import { ContentTodoOkrComponent } from './content-todo-okr/content-todo-okr.component';
// import { ContentTodoStatusComponent } from './content-todo-status/content-todo-status.component';
import { TasksComponent } from './todo/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerTodoComponent,
    TodoComponent,
    HeaderComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
