import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component948Component } from './component948.component';

describe('Component948Component', () => {
  let component: Component948Component;
  let fixture: ComponentFixture<Component948Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component948Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
