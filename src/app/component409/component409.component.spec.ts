import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component409Component } from './component409.component';

describe('Component409Component', () => {
  let component: Component409Component;
  let fixture: ComponentFixture<Component409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component409Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
