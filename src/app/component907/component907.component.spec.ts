import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component907Component } from './component907.component';

describe('Component907Component', () => {
  let component: Component907Component;
  let fixture: ComponentFixture<Component907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component907Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
