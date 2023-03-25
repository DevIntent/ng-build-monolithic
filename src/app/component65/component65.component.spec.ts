import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component65Component } from './component65.component';

describe('Component65Component', () => {
  let component: Component65Component;
  let fixture: ComponentFixture<Component65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component65Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
