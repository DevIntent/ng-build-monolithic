import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component346Component } from './component346.component';

describe('Component346Component', () => {
  let component: Component346Component;
  let fixture: ComponentFixture<Component346Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component346Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
