import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component657Component } from './component657.component';

describe('Component657Component', () => {
  let component: Component657Component;
  let fixture: ComponentFixture<Component657Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component657Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
