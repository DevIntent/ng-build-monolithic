import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component253Component } from './component253.component';

describe('Component253Component', () => {
  let component: Component253Component;
  let fixture: ComponentFixture<Component253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component253Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
