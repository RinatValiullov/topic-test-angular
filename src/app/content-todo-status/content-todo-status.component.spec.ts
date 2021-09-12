import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTodoStatusComponent } from './content-todo-status.component';

describe('ContentTodoStatusComponent', () => {
  let component: ContentTodoStatusComponent;
  let fixture: ComponentFixture<ContentTodoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTodoStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTodoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
