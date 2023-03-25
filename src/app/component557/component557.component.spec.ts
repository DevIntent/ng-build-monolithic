import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component557Component } from './component557.component';

describe('Component557Component', () => {
  let component: Component557Component;
  let fixture: ComponentFixture<Component557Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component557Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
