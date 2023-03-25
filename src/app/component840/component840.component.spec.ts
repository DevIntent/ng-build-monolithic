import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component840Component } from './component840.component';

describe('Component840Component', () => {
  let component: Component840Component;
  let fixture: ComponentFixture<Component840Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component840Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
