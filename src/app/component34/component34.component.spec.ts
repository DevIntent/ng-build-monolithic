import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component34Component } from './component34.component';

describe('Component34Component', () => {
  let component: Component34Component;
  let fixture: ComponentFixture<Component34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component34Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
