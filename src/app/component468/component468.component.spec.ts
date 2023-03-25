import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component468Component } from './component468.component';

describe('Component468Component', () => {
  let component: Component468Component;
  let fixture: ComponentFixture<Component468Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component468Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
