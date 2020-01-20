import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriffComponent } from './griff.component';

describe('GriffComponent', () => {
  let component: GriffComponent;
  let fixture: ComponentFixture<GriffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
