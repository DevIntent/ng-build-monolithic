import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component294Component } from './component294.component';

describe('Component294Component', () => {
  let component: Component294Component;
  let fixture: ComponentFixture<Component294Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component294Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
