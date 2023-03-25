import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component820Component } from './component820.component';

describe('Component820Component', () => {
  let component: Component820Component;
  let fixture: ComponentFixture<Component820Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component820Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
