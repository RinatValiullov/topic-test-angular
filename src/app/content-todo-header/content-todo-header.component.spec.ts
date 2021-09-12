import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTodoHeaderComponent } from './content-todo-header.component';

describe('ContentTodoHeaderComponent', () => {
  let component: ContentTodoHeaderComponent;
  let fixture: ComponentFixture<ContentTodoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTodoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTodoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
