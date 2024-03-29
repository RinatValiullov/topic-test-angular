import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTodoComponent } from './container-todo.component';

describe('ContainerTodoComponent', () => {
  let component: ContainerTodoComponent;
  let fixture: ComponentFixture<ContainerTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
