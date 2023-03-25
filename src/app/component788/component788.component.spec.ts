import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component788Component } from './component788.component';

describe('Component788Component', () => {
  let component: Component788Component;
  let fixture: ComponentFixture<Component788Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component788Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
