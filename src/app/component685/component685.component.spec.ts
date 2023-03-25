import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component685Component } from './component685.component';

describe('Component685Component', () => {
  let component: Component685Component;
  let fixture: ComponentFixture<Component685Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component685Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
