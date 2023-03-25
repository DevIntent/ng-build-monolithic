import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component829Component } from './component829.component';

describe('Component829Component', () => {
  let component: Component829Component;
  let fixture: ComponentFixture<Component829Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component829Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
