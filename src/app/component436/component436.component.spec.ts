import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component436Component } from './component436.component';

describe('Component436Component', () => {
  let component: Component436Component;
  let fixture: ComponentFixture<Component436Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component436Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
