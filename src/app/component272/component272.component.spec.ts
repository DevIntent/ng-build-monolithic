import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component272Component } from './component272.component';

describe('Component272Component', () => {
  let component: Component272Component;
  let fixture: ComponentFixture<Component272Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component272Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
