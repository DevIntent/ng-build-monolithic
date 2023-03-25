import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component879Component } from './component879.component';

describe('Component879Component', () => {
  let component: Component879Component;
  let fixture: ComponentFixture<Component879Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component879Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
