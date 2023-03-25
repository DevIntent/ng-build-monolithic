import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component518Component } from './component518.component';

describe('Component518Component', () => {
  let component: Component518Component;
  let fixture: ComponentFixture<Component518Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component518Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
