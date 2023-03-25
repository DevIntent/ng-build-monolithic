import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component185Component } from './component185.component';

describe('Component185Component', () => {
  let component: Component185Component;
  let fixture: ComponentFixture<Component185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component185Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
