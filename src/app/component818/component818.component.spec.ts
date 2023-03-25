import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component818Component } from './component818.component';

describe('Component818Component', () => {
  let component: Component818Component;
  let fixture: ComponentFixture<Component818Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component818Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
