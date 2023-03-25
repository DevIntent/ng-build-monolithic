import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component589Component } from './component589.component';

describe('Component589Component', () => {
  let component: Component589Component;
  let fixture: ComponentFixture<Component589Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component589Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
