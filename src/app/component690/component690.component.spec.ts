import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component690Component } from './component690.component';

describe('Component690Component', () => {
  let component: Component690Component;
  let fixture: ComponentFixture<Component690Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component690Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
