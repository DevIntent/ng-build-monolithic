import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component684Component } from './component684.component';

describe('Component684Component', () => {
  let component: Component684Component;
  let fixture: ComponentFixture<Component684Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component684Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
