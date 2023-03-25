import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component229Component } from './component229.component';

describe('Component229Component', () => {
  let component: Component229Component;
  let fixture: ComponentFixture<Component229Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component229Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
