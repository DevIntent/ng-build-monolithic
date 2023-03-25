import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component929Component } from './component929.component';

describe('Component929Component', () => {
  let component: Component929Component;
  let fixture: ComponentFixture<Component929Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component929Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
