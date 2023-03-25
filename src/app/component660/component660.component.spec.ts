import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component660Component } from './component660.component';

describe('Component660Component', () => {
  let component: Component660Component;
  let fixture: ComponentFixture<Component660Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component660Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
