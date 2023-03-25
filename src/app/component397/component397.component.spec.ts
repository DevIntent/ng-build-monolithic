import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component397Component } from './component397.component';

describe('Component397Component', () => {
  let component: Component397Component;
  let fixture: ComponentFixture<Component397Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component397Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
