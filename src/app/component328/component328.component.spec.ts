import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component328Component } from './component328.component';

describe('Component328Component', () => {
  let component: Component328Component;
  let fixture: ComponentFixture<Component328Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component328Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
