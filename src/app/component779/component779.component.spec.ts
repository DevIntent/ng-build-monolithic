import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component779Component } from './component779.component';

describe('Component779Component', () => {
  let component: Component779Component;
  let fixture: ComponentFixture<Component779Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component779Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
