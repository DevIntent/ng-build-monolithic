import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component716Component } from './component716.component';

describe('Component716Component', () => {
  let component: Component716Component;
  let fixture: ComponentFixture<Component716Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component716Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
