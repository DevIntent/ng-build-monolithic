import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component352Component } from './component352.component';

describe('Component352Component', () => {
  let component: Component352Component;
  let fixture: ComponentFixture<Component352Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component352Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
