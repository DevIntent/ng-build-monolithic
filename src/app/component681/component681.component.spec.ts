import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component681Component } from './component681.component';

describe('Component681Component', () => {
  let component: Component681Component;
  let fixture: ComponentFixture<Component681Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component681Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
