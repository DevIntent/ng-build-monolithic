import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component68Component } from './component68.component';

describe('Component68Component', () => {
  let component: Component68Component;
  let fixture: ComponentFixture<Component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component68Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
