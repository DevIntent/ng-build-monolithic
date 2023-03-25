import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component748Component } from './component748.component';

describe('Component748Component', () => {
  let component: Component748Component;
  let fixture: ComponentFixture<Component748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component748Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
