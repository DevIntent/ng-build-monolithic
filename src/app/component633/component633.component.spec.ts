import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component633Component } from './component633.component';

describe('Component633Component', () => {
  let component: Component633Component;
  let fixture: ComponentFixture<Component633Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component633Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
