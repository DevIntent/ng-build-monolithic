import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component156Component } from './component156.component';

describe('Component156Component', () => {
  let component: Component156Component;
  let fixture: ComponentFixture<Component156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component156Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
