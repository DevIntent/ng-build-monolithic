import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component37Component } from './component37.component';

describe('Component37Component', () => {
  let component: Component37Component;
  let fixture: ComponentFixture<Component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component37Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
