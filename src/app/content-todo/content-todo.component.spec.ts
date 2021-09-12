import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTodoComponent } from './content-todo.component';

describe('ContentTodoComponent', () => {
  let component: ContentTodoComponent;
  let fixture: ComponentFixture<ContentTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
