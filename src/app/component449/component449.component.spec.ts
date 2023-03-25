import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component449Component } from './component449.component';

describe('Component449Component', () => {
  let component: Component449Component;
  let fixture: ComponentFixture<Component449Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component449Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
