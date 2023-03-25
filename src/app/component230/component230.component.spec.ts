import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component230Component } from './component230.component';

describe('Component230Component', () => {
  let component: Component230Component;
  let fixture: ComponentFixture<Component230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component230Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
