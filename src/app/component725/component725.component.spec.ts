import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component725Component } from './component725.component';

describe('Component725Component', () => {
  let component: Component725Component;
  let fixture: ComponentFixture<Component725Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component725Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
