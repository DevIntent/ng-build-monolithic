import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component244Component } from './component244.component';

describe('Component244Component', () => {
  let component: Component244Component;
  let fixture: ComponentFixture<Component244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component244Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
