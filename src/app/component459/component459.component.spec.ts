import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component459Component } from './component459.component';

describe('Component459Component', () => {
  let component: Component459Component;
  let fixture: ComponentFixture<Component459Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component459Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
