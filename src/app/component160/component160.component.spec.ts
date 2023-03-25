import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component160Component } from './component160.component';

describe('Component160Component', () => {
  let component: Component160Component;
  let fixture: ComponentFixture<Component160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component160Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
