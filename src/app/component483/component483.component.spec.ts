import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component483Component } from './component483.component';

describe('Component483Component', () => {
  let component: Component483Component;
  let fixture: ComponentFixture<Component483Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component483Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
