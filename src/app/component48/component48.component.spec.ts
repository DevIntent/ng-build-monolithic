import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component48Component } from './component48.component';

describe('Component48Component', () => {
  let component: Component48Component;
  let fixture: ComponentFixture<Component48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component48Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
