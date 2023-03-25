import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component896Component } from './component896.component';

describe('Component896Component', () => {
  let component: Component896Component;
  let fixture: ComponentFixture<Component896Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component896Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
