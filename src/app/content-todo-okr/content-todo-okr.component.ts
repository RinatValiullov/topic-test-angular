import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-content-todo-okr',
  templateUrl: './content-todo-okr.component.html',
  styleUrls: ['./content-todo-okr.component.css']
})
export class ContentTodoOkrComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
