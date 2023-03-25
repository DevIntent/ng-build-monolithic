import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component411Component } from './component411.component';

describe('Component411Component', () => {
  let component: Component411Component;
  let fixture: ComponentFixture<Component411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component411Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
