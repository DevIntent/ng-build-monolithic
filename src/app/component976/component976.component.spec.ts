import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component976Component } from './component976.component';

describe('Component976Component', () => {
  let component: Component976Component;
  let fixture: ComponentFixture<Component976Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component976Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
