import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component561Component } from './component561.component';

describe('Component561Component', () => {
  let component: Component561Component;
  let fixture: ComponentFixture<Component561Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component561Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
