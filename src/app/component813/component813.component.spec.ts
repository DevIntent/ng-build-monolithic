import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component813Component } from './component813.component';

describe('Component813Component', () => {
  let component: Component813Component;
  let fixture: ComponentFixture<Component813Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component813Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
