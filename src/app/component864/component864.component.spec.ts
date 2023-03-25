import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component864Component } from './component864.component';

describe('Component864Component', () => {
  let component: Component864Component;
  let fixture: ComponentFixture<Component864Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component864Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
