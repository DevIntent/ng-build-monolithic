import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component600Component } from './component600.component';

describe('Component600Component', () => {
  let component: Component600Component;
  let fixture: ComponentFixture<Component600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component600Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
