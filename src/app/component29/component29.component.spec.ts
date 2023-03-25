import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component29Component } from './component29.component';

describe('Component29Component', () => {
  let component: Component29Component;
  let fixture: ComponentFixture<Component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
