import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component817Component } from './component817.component';

describe('Component817Component', () => {
  let component: Component817Component;
  let fixture: ComponentFixture<Component817Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component817Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
