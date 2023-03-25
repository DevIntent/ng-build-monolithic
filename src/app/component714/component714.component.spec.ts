import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component714Component } from './component714.component';

describe('Component714Component', () => {
  let component: Component714Component;
  let fixture: ComponentFixture<Component714Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component714Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
