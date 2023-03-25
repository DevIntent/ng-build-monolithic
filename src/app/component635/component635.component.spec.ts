import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component635Component } from './component635.component';

describe('Component635Component', () => {
  let component: Component635Component;
  let fixture: ComponentFixture<Component635Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component635Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
