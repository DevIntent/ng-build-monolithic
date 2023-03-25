import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component811Component } from './component811.component';

describe('Component811Component', () => {
  let component: Component811Component;
  let fixture: ComponentFixture<Component811Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component811Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
