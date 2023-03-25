import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component92Component } from './component92.component';

describe('Component92Component', () => {
  let component: Component92Component;
  let fixture: ComponentFixture<Component92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component92Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
