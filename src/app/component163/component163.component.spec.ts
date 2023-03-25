import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component163Component } from './component163.component';

describe('Component163Component', () => {
  let component: Component163Component;
  let fixture: ComponentFixture<Component163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component163Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
