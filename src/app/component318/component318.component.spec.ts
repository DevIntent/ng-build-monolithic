import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component318Component } from './component318.component';

describe('Component318Component', () => {
  let component: Component318Component;
  let fixture: ComponentFixture<Component318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component318Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
