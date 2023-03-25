import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component715Component } from './component715.component';

describe('Component715Component', () => {
  let component: Component715Component;
  let fixture: ComponentFixture<Component715Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component715Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
