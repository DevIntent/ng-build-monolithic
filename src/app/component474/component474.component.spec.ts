import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component474Component } from './component474.component';

describe('Component474Component', () => {
  let component: Component474Component;
  let fixture: ComponentFixture<Component474Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component474Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
