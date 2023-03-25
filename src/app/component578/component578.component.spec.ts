import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component578Component } from './component578.component';

describe('Component578Component', () => {
  let component: Component578Component;
  let fixture: ComponentFixture<Component578Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component578Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
