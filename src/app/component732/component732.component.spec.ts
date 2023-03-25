import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component732Component } from './component732.component';

describe('Component732Component', () => {
  let component: Component732Component;
  let fixture: ComponentFixture<Component732Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component732Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
