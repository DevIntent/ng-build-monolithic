import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component765Component } from './component765.component';

describe('Component765Component', () => {
  let component: Component765Component;
  let fixture: ComponentFixture<Component765Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component765Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
