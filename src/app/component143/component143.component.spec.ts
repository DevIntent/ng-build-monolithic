import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component143Component } from './component143.component';

describe('Component143Component', () => {
  let component: Component143Component;
  let fixture: ComponentFixture<Component143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component143Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
