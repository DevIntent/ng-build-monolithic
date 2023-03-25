import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component839Component } from './component839.component';

describe('Component839Component', () => {
  let component: Component839Component;
  let fixture: ComponentFixture<Component839Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component839Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
