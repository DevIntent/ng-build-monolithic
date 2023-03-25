import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component141Component } from './component141.component';

describe('Component141Component', () => {
  let component: Component141Component;
  let fixture: ComponentFixture<Component141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component141Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
