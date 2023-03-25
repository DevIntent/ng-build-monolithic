import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component242Component } from './component242.component';

describe('Component242Component', () => {
  let component: Component242Component;
  let fixture: ComponentFixture<Component242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component242Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
