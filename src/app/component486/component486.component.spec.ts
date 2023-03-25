import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component486Component } from './component486.component';

describe('Component486Component', () => {
  let component: Component486Component;
  let fixture: ComponentFixture<Component486Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component486Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
