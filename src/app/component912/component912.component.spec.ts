import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component912Component } from './component912.component';

describe('Component912Component', () => {
  let component: Component912Component;
  let fixture: ComponentFixture<Component912Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component912Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
