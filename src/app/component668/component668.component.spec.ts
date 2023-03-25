import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component668Component } from './component668.component';

describe('Component668Component', () => {
  let component: Component668Component;
  let fixture: ComponentFixture<Component668Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component668Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
