import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component755Component } from './component755.component';

describe('Component755Component', () => {
  let component: Component755Component;
  let fixture: ComponentFixture<Component755Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component755Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
