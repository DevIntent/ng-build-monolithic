import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component601Component } from './component601.component';

describe('Component601Component', () => {
  let component: Component601Component;
  let fixture: ComponentFixture<Component601Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component601Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
