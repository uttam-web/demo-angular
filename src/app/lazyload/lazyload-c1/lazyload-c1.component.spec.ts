import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadC1Component } from './lazyload-c1.component';

describe('LazyloadC1Component', () => {
  let component: LazyloadC1Component;
  let fixture: ComponentFixture<LazyloadC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
