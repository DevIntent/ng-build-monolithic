import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component682Component } from './component682.component';

describe('Component682Component', () => {
  let component: Component682Component;
  let fixture: ComponentFixture<Component682Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component682Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
