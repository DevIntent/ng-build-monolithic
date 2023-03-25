import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component359Component } from './component359.component';

describe('Component359Component', () => {
  let component: Component359Component;
  let fixture: ComponentFixture<Component359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component359Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
