import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component531Component } from './component531.component';

describe('Component531Component', () => {
  let component: Component531Component;
  let fixture: ComponentFixture<Component531Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component531Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
