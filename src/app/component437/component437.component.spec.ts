import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component437Component } from './component437.component';

describe('Component437Component', () => {
  let component: Component437Component;
  let fixture: ComponentFixture<Component437Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component437Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
