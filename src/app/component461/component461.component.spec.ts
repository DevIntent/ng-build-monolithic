import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component461Component } from './component461.component';

describe('Component461Component', () => {
  let component: Component461Component;
  let fixture: ComponentFixture<Component461Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component461Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
