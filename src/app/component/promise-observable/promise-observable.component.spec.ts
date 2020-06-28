import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseObservableComponent } from './promise-observable.component';

describe('PromiseObservableComponent', () => {
  let component: PromiseObservableComponent;
  let fixture: ComponentFixture<PromiseObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
