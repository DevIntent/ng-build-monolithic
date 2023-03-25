import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component369Component } from './component369.component';

describe('Component369Component', () => {
  let component: Component369Component;
  let fixture: ComponentFixture<Component369Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component369Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
