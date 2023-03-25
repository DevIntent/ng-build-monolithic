import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component812Component } from './component812.component';

describe('Component812Component', () => {
  let component: Component812Component;
  let fixture: ComponentFixture<Component812Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component812Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
