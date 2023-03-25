import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component187Component } from './component187.component';

describe('Component187Component', () => {
  let component: Component187Component;
  let fixture: ComponentFixture<Component187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component187Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
