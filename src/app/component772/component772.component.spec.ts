import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component772Component } from './component772.component';

describe('Component772Component', () => {
  let component: Component772Component;
  let fixture: ComponentFixture<Component772Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component772Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
