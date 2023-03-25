import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component134Component } from './component134.component';

describe('Component134Component', () => {
  let component: Component134Component;
  let fixture: ComponentFixture<Component134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component134Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
