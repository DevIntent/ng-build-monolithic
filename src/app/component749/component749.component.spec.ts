import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component749Component } from './component749.component';

describe('Component749Component', () => {
  let component: Component749Component;
  let fixture: ComponentFixture<Component749Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component749Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
