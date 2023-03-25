import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component73Component } from './component73.component';

describe('Component73Component', () => {
  let component: Component73Component;
  let fixture: ComponentFixture<Component73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component73Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
