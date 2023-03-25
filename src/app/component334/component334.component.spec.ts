import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component334Component } from './component334.component';

describe('Component334Component', () => {
  let component: Component334Component;
  let fixture: ComponentFixture<Component334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component334Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
