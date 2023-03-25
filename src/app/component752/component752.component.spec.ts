import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component752Component } from './component752.component';

describe('Component752Component', () => {
  let component: Component752Component;
  let fixture: ComponentFixture<Component752Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component752Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
