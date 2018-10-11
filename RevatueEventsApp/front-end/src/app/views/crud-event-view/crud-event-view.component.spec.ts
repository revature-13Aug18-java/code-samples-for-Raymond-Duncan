import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEventViewComponent } from './crud-event-view.component';

describe('CrudEventViewComponent', () => {
  let component: CrudEventViewComponent;
  let fixture: ComponentFixture<CrudEventViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEventViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
