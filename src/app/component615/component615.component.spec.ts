import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component615Component } from './component615.component';

describe('Component615Component', () => {
  let component: Component615Component;
  let fixture: ComponentFixture<Component615Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component615Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
