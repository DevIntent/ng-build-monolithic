import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component421Component } from './component421.component';

describe('Component421Component', () => {
  let component: Component421Component;
  let fixture: ComponentFixture<Component421Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component421Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
