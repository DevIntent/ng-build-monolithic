import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component562Component } from './component562.component';

describe('Component562Component', () => {
  let component: Component562Component;
  let fixture: ComponentFixture<Component562Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component562Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
