import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserPostsComponent } from './all-user-posts.component';

describe('AllUserPostsComponent', () => {
  let component: AllUserPostsComponent;
  let fixture: ComponentFixture<AllUserPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUserPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
