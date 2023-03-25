import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component408Component } from './component408.component';

describe('Component408Component', () => {
  let component: Component408Component;
  let fixture: ComponentFixture<Component408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component408Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
