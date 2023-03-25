import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component836Component } from './component836.component';

describe('Component836Component', () => {
  let component: Component836Component;
  let fixture: ComponentFixture<Component836Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component836Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
