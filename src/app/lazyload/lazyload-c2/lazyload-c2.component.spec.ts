import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadC2Component } from './lazyload-c2.component';

describe('LazyloadC2Component', () => {
  let component: LazyloadC2Component;
  let fixture: ComponentFixture<LazyloadC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
