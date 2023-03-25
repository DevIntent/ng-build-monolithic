import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component540Component } from './component540.component';

describe('Component540Component', () => {
  let component: Component540Component;
  let fixture: ComponentFixture<Component540Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component540Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
