import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTodoOkrComponent } from './content-todo-okr.component';

describe('ContentTodoOkrComponent', () => {
  let component: ContentTodoOkrComponent;
  let fixture: ComponentFixture<ContentTodoOkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTodoOkrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTodoOkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
