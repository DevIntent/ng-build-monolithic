import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component28Component } from './component28.component';

describe('Component28Component', () => {
  let component: Component28Component;
  let fixture: ComponentFixture<Component28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component28Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
