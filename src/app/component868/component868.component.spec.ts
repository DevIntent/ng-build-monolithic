import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component868Component } from './component868.component';

describe('Component868Component', () => {
  let component: Component868Component;
  let fixture: ComponentFixture<Component868Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component868Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
