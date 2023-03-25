import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component394Component } from './component394.component';

describe('Component394Component', () => {
  let component: Component394Component;
  let fixture: ComponentFixture<Component394Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component394Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
