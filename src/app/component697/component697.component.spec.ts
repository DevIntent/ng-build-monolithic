import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component697Component } from './component697.component';

describe('Component697Component', () => {
  let component: Component697Component;
  let fixture: ComponentFixture<Component697Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component697Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
