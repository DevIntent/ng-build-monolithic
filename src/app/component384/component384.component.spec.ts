import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component384Component } from './component384.component';

describe('Component384Component', () => {
  let component: Component384Component;
  let fixture: ComponentFixture<Component384Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component384Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
