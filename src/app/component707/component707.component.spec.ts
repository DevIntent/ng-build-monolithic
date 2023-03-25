import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component707Component } from './component707.component';

describe('Component707Component', () => {
  let component: Component707Component;
  let fixture: ComponentFixture<Component707Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component707Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
