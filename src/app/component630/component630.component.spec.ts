import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component630Component } from './component630.component';

describe('Component630Component', () => {
  let component: Component630Component;
  let fixture: ComponentFixture<Component630Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component630Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
