import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component102Component } from './component102.component';

describe('Component102Component', () => {
  let component: Component102Component;
  let fixture: ComponentFixture<Component102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component102Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
