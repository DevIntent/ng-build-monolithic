import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component458Component } from './component458.component';

describe('Component458Component', () => {
  let component: Component458Component;
  let fixture: ComponentFixture<Component458Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component458Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
