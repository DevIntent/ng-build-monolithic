import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component519Component } from './component519.component';

describe('Component519Component', () => {
  let component: Component519Component;
  let fixture: ComponentFixture<Component519Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component519Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
