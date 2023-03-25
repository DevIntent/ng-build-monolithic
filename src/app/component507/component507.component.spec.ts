import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component507Component } from './component507.component';

describe('Component507Component', () => {
  let component: Component507Component;
  let fixture: ComponentFixture<Component507Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component507Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
