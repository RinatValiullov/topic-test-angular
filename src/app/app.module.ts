import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerTodoComponent } from './container-todo/container-todo.component';
import { ContentTodoComponent } from './content-todo/content-todo.component';
import { ContentTodoHeaderComponent } from './content-todo-header/content-todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerTodoComponent,
    ContentTodoComponent,
    ContentTodoHeaderComponent
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
