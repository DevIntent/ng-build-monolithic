import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component240Component } from './component240.component';

describe('Component240Component', () => {
  let component: Component240Component;
  let fixture: ComponentFixture<Component240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component240Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
