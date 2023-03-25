import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component888Component } from './component888.component';

describe('Component888Component', () => {
  let component: Component888Component;
  let fixture: ComponentFixture<Component888Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component888Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
