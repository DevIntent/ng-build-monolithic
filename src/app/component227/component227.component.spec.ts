import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component227Component } from './component227.component';

describe('Component227Component', () => {
  let component: Component227Component;
  let fixture: ComponentFixture<Component227Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component227Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
