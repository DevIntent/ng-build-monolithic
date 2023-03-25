import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component251Component } from './component251.component';

describe('Component251Component', () => {
  let component: Component251Component;
  let fixture: ComponentFixture<Component251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component251Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
