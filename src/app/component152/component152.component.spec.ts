import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component152Component } from './component152.component';

describe('Component152Component', () => {
  let component: Component152Component;
  let fixture: ComponentFixture<Component152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component152Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
