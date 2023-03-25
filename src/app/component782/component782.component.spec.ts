import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component782Component } from './component782.component';

describe('Component782Component', () => {
  let component: Component782Component;
  let fixture: ComponentFixture<Component782Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component782Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
