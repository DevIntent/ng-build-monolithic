import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component311Component } from './component311.component';

describe('Component311Component', () => {
  let component: Component311Component;
  let fixture: ComponentFixture<Component311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component311Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
