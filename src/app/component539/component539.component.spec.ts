import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component539Component } from './component539.component';

describe('Component539Component', () => {
  let component: Component539Component;
  let fixture: ComponentFixture<Component539Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component539Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
