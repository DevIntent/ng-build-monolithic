import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component470Component } from './component470.component';

describe('Component470Component', () => {
  let component: Component470Component;
  let fixture: ComponentFixture<Component470Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component470Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
