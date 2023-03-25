import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component796Component } from './component796.component';

describe('Component796Component', () => {
  let component: Component796Component;
  let fixture: ComponentFixture<Component796Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component796Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
