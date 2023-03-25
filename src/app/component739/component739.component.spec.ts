import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component739Component } from './component739.component';

describe('Component739Component', () => {
  let component: Component739Component;
  let fixture: ComponentFixture<Component739Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component739Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
