import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component323Component } from './component323.component';

describe('Component323Component', () => {
  let component: Component323Component;
  let fixture: ComponentFixture<Component323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component323Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
