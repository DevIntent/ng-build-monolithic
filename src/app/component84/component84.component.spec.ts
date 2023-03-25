import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component84Component } from './component84.component';

describe('Component84Component', () => {
  let component: Component84Component;
  let fixture: ComponentFixture<Component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component84Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
