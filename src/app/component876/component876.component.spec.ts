import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component876Component } from './component876.component';

describe('Component876Component', () => {
  let component: Component876Component;
  let fixture: ComponentFixture<Component876Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component876Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
