import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component220Component } from './component220.component';

describe('Component220Component', () => {
  let component: Component220Component;
  let fixture: ComponentFixture<Component220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component220Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
