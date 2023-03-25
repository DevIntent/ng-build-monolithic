import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component642Component } from './component642.component';

describe('Component642Component', () => {
  let component: Component642Component;
  let fixture: ComponentFixture<Component642Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component642Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
