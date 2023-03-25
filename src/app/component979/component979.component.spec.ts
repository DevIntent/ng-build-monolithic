import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component979Component } from './component979.component';

describe('Component979Component', () => {
  let component: Component979Component;
  let fixture: ComponentFixture<Component979Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component979Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
