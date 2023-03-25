import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component783Component } from './component783.component';

describe('Component783Component', () => {
  let component: Component783Component;
  let fixture: ComponentFixture<Component783Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component783Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
