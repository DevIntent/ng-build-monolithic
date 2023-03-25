import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component648Component } from './component648.component';

describe('Component648Component', () => {
  let component: Component648Component;
  let fixture: ComponentFixture<Component648Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component648Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
