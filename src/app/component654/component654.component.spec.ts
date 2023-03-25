import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component654Component } from './component654.component';

describe('Component654Component', () => {
  let component: Component654Component;
  let fixture: ComponentFixture<Component654Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component654Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
