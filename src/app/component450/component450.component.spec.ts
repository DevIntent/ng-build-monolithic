import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component450Component } from './component450.component';

describe('Component450Component', () => {
  let component: Component450Component;
  let fixture: ComponentFixture<Component450Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component450Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
