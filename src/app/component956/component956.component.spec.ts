import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component956Component } from './component956.component';

describe('Component956Component', () => {
  let component: Component956Component;
  let fixture: ComponentFixture<Component956Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component956Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
