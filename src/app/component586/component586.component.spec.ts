import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component586Component } from './component586.component';

describe('Component586Component', () => {
  let component: Component586Component;
  let fixture: ComponentFixture<Component586Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component586Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
