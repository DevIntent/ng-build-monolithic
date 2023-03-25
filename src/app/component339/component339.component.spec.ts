import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component339Component } from './component339.component';

describe('Component339Component', () => {
  let component: Component339Component;
  let fixture: ComponentFixture<Component339Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component339Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
