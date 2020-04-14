import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostCommentsComponent } from './all-post-comments.component';

describe('AllPostCommentsComponent', () => {
  let component: AllPostCommentsComponent;
  let fixture: ComponentFixture<AllPostCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPostCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
