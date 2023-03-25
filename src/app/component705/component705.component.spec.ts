import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component705Component } from './component705.component';

describe('Component705Component', () => {
  let component: Component705Component;
  let fixture: ComponentFixture<Component705Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component705Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
