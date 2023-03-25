import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component548Component } from './component548.component';

describe('Component548Component', () => {
  let component: Component548Component;
  let fixture: ComponentFixture<Component548Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component548Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
