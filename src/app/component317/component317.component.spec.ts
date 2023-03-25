import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component317Component } from './component317.component';

describe('Component317Component', () => {
  let component: Component317Component;
  let fixture: ComponentFixture<Component317Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component317Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
