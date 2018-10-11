import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbComponent } from './reimb.component';

describe('ReimbComponent', () => {
  let component: ReimbComponent;
  let fixture: ComponentFixture<ReimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
