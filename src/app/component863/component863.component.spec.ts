import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component863Component } from './component863.component';

describe('Component863Component', () => {
  let component: Component863Component;
  let fixture: ComponentFixture<Component863Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component863Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
