import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component808Component } from './component808.component';

describe('Component808Component', () => {
  let component: Component808Component;
  let fixture: ComponentFixture<Component808Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component808Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
