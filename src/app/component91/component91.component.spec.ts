import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component91Component } from './component91.component';

describe('Component91Component', () => {
  let component: Component91Component;
  let fixture: ComponentFixture<Component91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component91Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
