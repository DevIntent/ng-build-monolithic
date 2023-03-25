import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component82Component } from './component82.component';

describe('Component82Component', () => {
  let component: Component82Component;
  let fixture: ComponentFixture<Component82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component82Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
