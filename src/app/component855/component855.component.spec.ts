import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component855Component } from './component855.component';

describe('Component855Component', () => {
  let component: Component855Component;
  let fixture: ComponentFixture<Component855Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component855Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
