import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component492Component } from './component492.component';

describe('Component492Component', () => {
  let component: Component492Component;
  let fixture: ComponentFixture<Component492Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component492Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
