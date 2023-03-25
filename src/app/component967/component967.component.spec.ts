import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component967Component } from './component967.component';

describe('Component967Component', () => {
  let component: Component967Component;
  let fixture: ComponentFixture<Component967Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component967Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
