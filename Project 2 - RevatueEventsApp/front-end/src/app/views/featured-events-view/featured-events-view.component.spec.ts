import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedEventsViewComponent } from './featured-events-view.component';

describe('FeaturedEventsViewComponent', () => {
  let component: FeaturedEventsViewComponent;
  let fixture: ComponentFixture<FeaturedEventsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedEventsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedEventsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
