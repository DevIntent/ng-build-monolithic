import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component174Component } from './component174.component';

describe('Component174Component', () => {
  let component: Component174Component;
  let fixture: ComponentFixture<Component174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component174Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
