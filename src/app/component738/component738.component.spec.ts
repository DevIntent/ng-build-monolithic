import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component738Component } from './component738.component';

describe('Component738Component', () => {
  let component: Component738Component;
  let fixture: ComponentFixture<Component738Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component738Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
