import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component231Component } from './component231.component';

describe('Component231Component', () => {
  let component: Component231Component;
  let fixture: ComponentFixture<Component231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component231Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
