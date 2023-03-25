import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component288Component } from './component288.component';

describe('Component288Component', () => {
  let component: Component288Component;
  let fixture: ComponentFixture<Component288Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component288Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
