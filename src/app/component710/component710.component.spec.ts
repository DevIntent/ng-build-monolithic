import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component710Component } from './component710.component';

describe('Component710Component', () => {
  let component: Component710Component;
  let fixture: ComponentFixture<Component710Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component710Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
