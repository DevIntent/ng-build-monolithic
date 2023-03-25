import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component543Component } from './component543.component';

describe('Component543Component', () => {
  let component: Component543Component;
  let fixture: ComponentFixture<Component543Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component543Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
