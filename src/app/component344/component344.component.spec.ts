import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component344Component } from './component344.component';

describe('Component344Component', () => {
  let component: Component344Component;
  let fixture: ComponentFixture<Component344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component344Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
