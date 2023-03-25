import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component965Component } from './component965.component';

describe('Component965Component', () => {
  let component: Component965Component;
  let fixture: ComponentFixture<Component965Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component965Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
