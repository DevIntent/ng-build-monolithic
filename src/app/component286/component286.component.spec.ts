import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component286Component } from './component286.component';

describe('Component286Component', () => {
  let component: Component286Component;
  let fixture: ComponentFixture<Component286Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component286Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
