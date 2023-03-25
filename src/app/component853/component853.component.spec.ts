import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component853Component } from './component853.component';

describe('Component853Component', () => {
  let component: Component853Component;
  let fixture: ComponentFixture<Component853Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component853Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
