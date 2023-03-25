import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component816Component } from './component816.component';

describe('Component816Component', () => {
  let component: Component816Component;
  let fixture: ComponentFixture<Component816Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component816Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
