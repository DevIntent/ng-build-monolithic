import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component285Component } from './component285.component';

describe('Component285Component', () => {
  let component: Component285Component;
  let fixture: ComponentFixture<Component285Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component285Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
