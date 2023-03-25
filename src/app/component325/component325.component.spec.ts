import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component325Component } from './component325.component';

describe('Component325Component', () => {
  let component: Component325Component;
  let fixture: ComponentFixture<Component325Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component325Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
