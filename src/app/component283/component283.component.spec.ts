import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component283Component } from './component283.component';

describe('Component283Component', () => {
  let component: Component283Component;
  let fixture: ComponentFixture<Component283Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component283Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
