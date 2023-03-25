import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component523Component } from './component523.component';

describe('Component523Component', () => {
  let component: Component523Component;
  let fixture: ComponentFixture<Component523Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component523Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
