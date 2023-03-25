import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component762Component } from './component762.component';

describe('Component762Component', () => {
  let component: Component762Component;
  let fixture: ComponentFixture<Component762Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component762Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
