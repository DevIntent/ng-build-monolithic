import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component127Component } from './component127.component';

describe('Component127Component', () => {
  let component: Component127Component;
  let fixture: ComponentFixture<Component127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component127Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
