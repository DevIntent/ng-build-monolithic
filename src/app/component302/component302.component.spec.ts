import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component302Component } from './component302.component';

describe('Component302Component', () => {
  let component: Component302Component;
  let fixture: ComponentFixture<Component302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component302Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
