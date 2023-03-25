import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component666Component } from './component666.component';

describe('Component666Component', () => {
  let component: Component666Component;
  let fixture: ComponentFixture<Component666Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component666Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
