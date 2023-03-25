import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component182Component } from './component182.component';

describe('Component182Component', () => {
  let component: Component182Component;
  let fixture: ComponentFixture<Component182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component182Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
