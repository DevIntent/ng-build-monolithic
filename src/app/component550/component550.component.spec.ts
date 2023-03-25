import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component550Component } from './component550.component';

describe('Component550Component', () => {
  let component: Component550Component;
  let fixture: ComponentFixture<Component550Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component550Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
