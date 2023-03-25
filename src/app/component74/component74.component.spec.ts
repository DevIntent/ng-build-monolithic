import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component74Component } from './component74.component';

describe('Component74Component', () => {
  let component: Component74Component;
  let fixture: ComponentFixture<Component74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component74Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
