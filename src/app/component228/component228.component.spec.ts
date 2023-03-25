import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component228Component } from './component228.component';

describe('Component228Component', () => {
  let component: Component228Component;
  let fixture: ComponentFixture<Component228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component228Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
