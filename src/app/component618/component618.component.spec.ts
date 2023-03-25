import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component618Component } from './component618.component';

describe('Component618Component', () => {
  let component: Component618Component;
  let fixture: ComponentFixture<Component618Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component618Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
