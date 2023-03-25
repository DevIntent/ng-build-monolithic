import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component248Component } from './component248.component';

describe('Component248Component', () => {
  let component: Component248Component;
  let fixture: ComponentFixture<Component248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component248Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
