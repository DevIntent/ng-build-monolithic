import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component770Component } from './component770.component';

describe('Component770Component', () => {
  let component: Component770Component;
  let fixture: ComponentFixture<Component770Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component770Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
