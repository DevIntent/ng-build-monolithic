import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component475Component } from './component475.component';

describe('Component475Component', () => {
  let component: Component475Component;
  let fixture: ComponentFixture<Component475Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component475Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
