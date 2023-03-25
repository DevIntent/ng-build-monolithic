import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component962Component } from './component962.component';

describe('Component962Component', () => {
  let component: Component962Component;
  let fixture: ComponentFixture<Component962Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component962Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
