import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component700Component } from './component700.component';

describe('Component700Component', () => {
  let component: Component700Component;
  let fixture: ComponentFixture<Component700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component700Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
