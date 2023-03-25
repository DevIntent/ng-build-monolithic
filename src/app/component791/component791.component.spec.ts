import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component791Component } from './component791.component';

describe('Component791Component', () => {
  let component: Component791Component;
  let fixture: ComponentFixture<Component791Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component791Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
