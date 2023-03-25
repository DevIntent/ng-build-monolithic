import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component624Component } from './component624.component';

describe('Component624Component', () => {
  let component: Component624Component;
  let fixture: ComponentFixture<Component624Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component624Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
