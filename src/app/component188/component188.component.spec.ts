import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component188Component } from './component188.component';

describe('Component188Component', () => {
  let component: Component188Component;
  let fixture: ComponentFixture<Component188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component188Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
