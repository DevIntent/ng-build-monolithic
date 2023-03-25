import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component58Component } from './component58.component';

describe('Component58Component', () => {
  let component: Component58Component;
  let fixture: ComponentFixture<Component58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component58Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
