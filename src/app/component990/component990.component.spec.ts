import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component990Component } from './component990.component';

describe('Component990Component', () => {
  let component: Component990Component;
  let fixture: ComponentFixture<Component990Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component990Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
