import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component799Component } from './component799.component';

describe('Component799Component', () => {
  let component: Component799Component;
  let fixture: ComponentFixture<Component799Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component799Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
