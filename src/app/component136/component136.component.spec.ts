import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component136Component } from './component136.component';

describe('Component136Component', () => {
  let component: Component136Component;
  let fixture: ComponentFixture<Component136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component136Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
