import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component342Component } from './component342.component';

describe('Component342Component', () => {
  let component: Component342Component;
  let fixture: ComponentFixture<Component342Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component342Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
