import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component534Component } from './component534.component';

describe('Component534Component', () => {
  let component: Component534Component;
  let fixture: ComponentFixture<Component534Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component534Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
