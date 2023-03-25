import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component737Component } from './component737.component';

describe('Component737Component', () => {
  let component: Component737Component;
  let fixture: ComponentFixture<Component737Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component737Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
