import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component936Component } from './component936.component';

describe('Component936Component', () => {
  let component: Component936Component;
  let fixture: ComponentFixture<Component936Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component936Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
