import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component47Component } from './component47.component';

describe('Component47Component', () => {
  let component: Component47Component;
  let fixture: ComponentFixture<Component47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component47Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
