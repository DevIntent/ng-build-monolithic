import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component517Component } from './component517.component';

describe('Component517Component', () => {
  let component: Component517Component;
  let fixture: ComponentFixture<Component517Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component517Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
