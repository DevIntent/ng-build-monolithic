import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component931Component } from './component931.component';

describe('Component931Component', () => {
  let component: Component931Component;
  let fixture: ComponentFixture<Component931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component931Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
