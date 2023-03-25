import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component446Component } from './component446.component';

describe('Component446Component', () => {
  let component: Component446Component;
  let fixture: ComponentFixture<Component446Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component446Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
