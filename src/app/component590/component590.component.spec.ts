import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component590Component } from './component590.component';

describe('Component590Component', () => {
  let component: Component590Component;
  let fixture: ComponentFixture<Component590Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component590Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
