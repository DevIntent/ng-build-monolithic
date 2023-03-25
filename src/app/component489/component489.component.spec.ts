import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component489Component } from './component489.component';

describe('Component489Component', () => {
  let component: Component489Component;
  let fixture: ComponentFixture<Component489Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component489Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
