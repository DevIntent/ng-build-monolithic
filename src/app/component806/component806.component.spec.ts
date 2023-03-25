import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component806Component } from './component806.component';

describe('Component806Component', () => {
  let component: Component806Component;
  let fixture: ComponentFixture<Component806Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component806Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
