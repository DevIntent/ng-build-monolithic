import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component33Component } from './component33.component';

describe('Component33Component', () => {
  let component: Component33Component;
  let fixture: ComponentFixture<Component33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
