import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component947Component } from './component947.component';

describe('Component947Component', () => {
  let component: Component947Component;
  let fixture: ComponentFixture<Component947Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component947Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
