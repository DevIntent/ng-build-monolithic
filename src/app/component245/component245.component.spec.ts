import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component245Component } from './component245.component';

describe('Component245Component', () => {
  let component: Component245Component;
  let fixture: ComponentFixture<Component245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component245Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
