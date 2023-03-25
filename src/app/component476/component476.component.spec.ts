import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component476Component } from './component476.component';

describe('Component476Component', () => {
  let component: Component476Component;
  let fixture: ComponentFixture<Component476Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component476Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
