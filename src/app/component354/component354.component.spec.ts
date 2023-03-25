import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component354Component } from './component354.component';

describe('Component354Component', () => {
  let component: Component354Component;
  let fixture: ComponentFixture<Component354Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component354Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
