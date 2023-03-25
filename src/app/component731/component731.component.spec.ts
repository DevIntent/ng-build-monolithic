import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component731Component } from './component731.component';

describe('Component731Component', () => {
  let component: Component731Component;
  let fixture: ComponentFixture<Component731Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component731Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
