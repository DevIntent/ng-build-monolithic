import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component734Component } from './component734.component';

describe('Component734Component', () => {
  let component: Component734Component;
  let fixture: ComponentFixture<Component734Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component734Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
