import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component585Component } from './component585.component';

describe('Component585Component', () => {
  let component: Component585Component;
  let fixture: ComponentFixture<Component585Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component585Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
