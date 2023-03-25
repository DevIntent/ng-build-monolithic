import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component366Component } from './component366.component';

describe('Component366Component', () => {
  let component: Component366Component;
  let fixture: ComponentFixture<Component366Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component366Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
