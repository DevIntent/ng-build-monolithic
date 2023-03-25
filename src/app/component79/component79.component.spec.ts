import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component79Component } from './component79.component';

describe('Component79Component', () => {
  let component: Component79Component;
  let fixture: ComponentFixture<Component79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component79Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
