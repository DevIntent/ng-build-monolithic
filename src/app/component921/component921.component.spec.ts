import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component921Component } from './component921.component';

describe('Component921Component', () => {
  let component: Component921Component;
  let fixture: ComponentFixture<Component921Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component921Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
