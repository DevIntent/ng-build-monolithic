import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component632Component } from './component632.component';

describe('Component632Component', () => {
  let component: Component632Component;
  let fixture: ComponentFixture<Component632Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component632Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
