import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component892Component } from './component892.component';

describe('Component892Component', () => {
  let component: Component892Component;
  let fixture: ComponentFixture<Component892Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component892Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
