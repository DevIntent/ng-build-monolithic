import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component439Component } from './component439.component';

describe('Component439Component', () => {
  let component: Component439Component;
  let fixture: ComponentFixture<Component439Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component439Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
