import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component689Component } from './component689.component';

describe('Component689Component', () => {
  let component: Component689Component;
  let fixture: ComponentFixture<Component689Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component689Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
