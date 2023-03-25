import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component263Component } from './component263.component';

describe('Component263Component', () => {
  let component: Component263Component;
  let fixture: ComponentFixture<Component263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component263Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
