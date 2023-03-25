import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component669Component } from './component669.component';

describe('Component669Component', () => {
  let component: Component669Component;
  let fixture: ComponentFixture<Component669Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component669Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
