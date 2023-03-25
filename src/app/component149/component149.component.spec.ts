import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component149Component } from './component149.component';

describe('Component149Component', () => {
  let component: Component149Component;
  let fixture: ComponentFixture<Component149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component149Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
