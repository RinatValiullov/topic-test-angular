import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { Task } from '../../task';
import { Amount } from '../../amount';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = TASKS;

  page: number = 1;
  totalRecords: number = TASKS.length;

  amount: Amount[] = [
    { value: 5 },
    { value: 10 },
    { value: 15 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
