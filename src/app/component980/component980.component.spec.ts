import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component980Component } from './component980.component';

describe('Component980Component', () => {
  let component: Component980Component;
  let fixture: ComponentFixture<Component980Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component980Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
