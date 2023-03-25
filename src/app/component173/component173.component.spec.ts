import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component173Component } from './component173.component';

describe('Component173Component', () => {
  let component: Component173Component;
  let fixture: ComponentFixture<Component173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component173Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
