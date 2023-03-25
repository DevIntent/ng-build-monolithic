import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component49Component } from './component49.component';

describe('Component49Component', () => {
  let component: Component49Component;
  let fixture: ComponentFixture<Component49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component49Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
