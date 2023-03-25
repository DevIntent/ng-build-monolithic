import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component915Component } from './component915.component';

describe('Component915Component', () => {
  let component: Component915Component;
  let fixture: ComponentFixture<Component915Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component915Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
