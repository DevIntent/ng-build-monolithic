import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component815Component } from './component815.component';

describe('Component815Component', () => {
  let component: Component815Component;
  let fixture: ComponentFixture<Component815Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component815Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
