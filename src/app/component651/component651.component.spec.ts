import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component651Component } from './component651.component';

describe('Component651Component', () => {
  let component: Component651Component;
  let fixture: ComponentFixture<Component651Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component651Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
