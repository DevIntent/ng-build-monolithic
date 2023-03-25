import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component940Component } from './component940.component';

describe('Component940Component', () => {
  let component: Component940Component;
  let fixture: ComponentFixture<Component940Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component940Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
