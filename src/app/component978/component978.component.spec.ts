import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component978Component } from './component978.component';

describe('Component978Component', () => {
  let component: Component978Component;
  let fixture: ComponentFixture<Component978Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component978Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
