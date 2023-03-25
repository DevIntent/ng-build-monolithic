import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component934Component } from './component934.component';

describe('Component934Component', () => {
  let component: Component934Component;
  let fixture: ComponentFixture<Component934Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component934Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
