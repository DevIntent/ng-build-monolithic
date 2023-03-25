import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component201Component } from './component201.component';

describe('Component201Component', () => {
  let component: Component201Component;
  let fixture: ComponentFixture<Component201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component201Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
