import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component889Component } from './component889.component';

describe('Component889Component', () => {
  let component: Component889Component;
  let fixture: ComponentFixture<Component889Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component889Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
