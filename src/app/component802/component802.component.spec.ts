import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component802Component } from './component802.component';

describe('Component802Component', () => {
  let component: Component802Component;
  let fixture: ComponentFixture<Component802Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component802Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
