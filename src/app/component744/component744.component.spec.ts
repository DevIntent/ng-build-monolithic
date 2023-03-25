import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component744Component } from './component744.component';

describe('Component744Component', () => {
  let component: Component744Component;
  let fixture: ComponentFixture<Component744Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component744Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
