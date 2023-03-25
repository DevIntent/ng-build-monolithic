import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component239Component } from './component239.component';

describe('Component239Component', () => {
  let component: Component239Component;
  let fixture: ComponentFixture<Component239Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component239Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
