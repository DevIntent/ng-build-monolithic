import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component680Component } from './component680.component';

describe('Component680Component', () => {
  let component: Component680Component;
  let fixture: ComponentFixture<Component680Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component680Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
