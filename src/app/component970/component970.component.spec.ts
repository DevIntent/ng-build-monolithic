import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component970Component } from './component970.component';

describe('Component970Component', () => {
  let component: Component970Component;
  let fixture: ComponentFixture<Component970Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component970Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
