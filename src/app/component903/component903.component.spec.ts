import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component903Component } from './component903.component';

describe('Component903Component', () => {
  let component: Component903Component;
  let fixture: ComponentFixture<Component903Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component903Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
