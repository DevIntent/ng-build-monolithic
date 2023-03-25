import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component757Component } from './component757.component';

describe('Component757Component', () => {
  let component: Component757Component;
  let fixture: ComponentFixture<Component757Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component757Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
