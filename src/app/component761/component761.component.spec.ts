import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component761Component } from './component761.component';

describe('Component761Component', () => {
  let component: Component761Component;
  let fixture: ComponentFixture<Component761Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component761Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
