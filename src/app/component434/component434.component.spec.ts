import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component434Component } from './component434.component';

describe('Component434Component', () => {
  let component: Component434Component;
  let fixture: ComponentFixture<Component434Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component434Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
